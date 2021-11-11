package notification

import (
	"context"
	"time"

	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/resources/forum"
)

type DB struct {
	db *db.PrismaClient
}

func New(db *db.PrismaClient) Repository {
	return &DB{db}
}

func (d *DB) Subscribe(ctx context.Context, userID string, refersType NotificationType, refersTo string) (*Subscription, error) {
	sub, err := d.db.Subscription.CreateOne(
		db.Subscription.User.Link(db.User.ID.Equals(userID)),
		db.Subscription.RefersType.Set(db.NotificationType(refersType)),
		db.Subscription.RefersTo.Set(refersTo),
	).Exec(ctx)
	if err != nil {
		return nil, err
	}
	return SubFromModel(sub), nil
}

func (d *DB) Unsubscribe(ctx context.Context, userID, subID string) (int, error) {
	updateSubscription := d.db.Subscription.
		FindMany(
			db.Subscription.ID.Equals(subID),
			db.Subscription.UserID.Equals(userID),
		).
		With(
			db.Subscription.Notifications.Fetch(),
		).
		Update(
			db.Subscription.DeletedAt.Set(time.Now()),
		).
		Tx()

	deleteNotifications := d.db.Notification.
		FindMany(
			db.Notification.SubscriptionID.Equals(subID),
		).
		Delete().
		Tx()

	err := d.db.Prisma.TX.Transaction(
		updateSubscription,
		deleteNotifications,
	).Exec(ctx)
	if err != nil {
		return 0, err
	}

	return deleteNotifications.Result().Count, nil
}

func (d *DB) GetSubscriptions(ctx context.Context, userID string) ([]Subscription, error) {
	subs, err := d.db.Subscription.
		FindMany(
			db.Subscription.UserID.Equals(userID),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	result := []Subscription{}
	for _, s := range subs {
		result = append(result, *SubFromModel(&s))
	}
	return result, nil
}

func (d *DB) GetNotifications(ctx context.Context, userID string, unread bool, after time.Time) ([]Notification, error) {
	filters := []db.NotificationWhereParam{
		db.Notification.Subscription.Where(
			db.Subscription.UserID.Equals(userID),
		),
	}

	// if unread is true, only return unread notifications, otherwise, all.
	if unread {
		filters = append(filters, db.Notification.Read.Equals(false))
	}

	if !after.IsZero() {
		filters = append(filters, db.Notification.CreatedAt.After(after))
	}

	notifs, err := d.db.Notification.FindMany(filters...).Exec(ctx)
	if err != nil {
		return nil, err
	}

	result := []Notification{}
	for _, n := range notifs {
		result = append(result, *FromModel(&n))
	}

	return result, nil
}

func (d *DB) SetReadState(ctx context.Context, userID string, notificationID string, read bool) (*Notification, error) {
	ok, err := d.userHasRightsForNotification(ctx, userID, notificationID)
	if err != nil {
		return nil, err
	}
	if !ok {
		return nil, forum.ErrUnauthorised
	}

	notif, err := d.db.Notification.
		FindUnique(
			db.Notification.ID.Equals(notificationID),
		).
		Update(
			db.Notification.Read.Set(read),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(notif), nil
}

// TODO: Cache these. Or do more clever queries.
func (d *DB) userHasRightsForNotification(ctx context.Context, userID, notificationID string) (bool, error) {
	n, err := d.db.Notification.
		FindUnique(db.Notification.ID.Equals(notificationID)).
		With(db.Notification.Subscription.Fetch()).
		Exec(ctx)
	if err != nil {
		return false, err
	}
	return n.Subscription().User().ID == userID, nil
}

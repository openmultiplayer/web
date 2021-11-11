package notification

import (
	"context"
	"time"
)

type Repository interface {
	Subscribe(ctx context.Context, userID string, refersType NotificationType, refersTo string) (*Subscription, error)
	Unsubscribe(ctx context.Context, userID, subID string) (int, error)

	GetSubscriptions(ctx context.Context, userID string) ([]Subscription, error)
	GetNotifications(ctx context.Context, userID string, read bool, after time.Time) ([]Notification, error)

	SetReadState(ctx context.Context, userID string, notificationID string, read bool) (*Notification, error)
}

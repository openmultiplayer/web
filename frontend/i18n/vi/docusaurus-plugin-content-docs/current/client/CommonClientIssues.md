---
title: Common Client Issues
sidebar_label: Common Client Issues
---

### Tôi nhận được lỗi "San Andreas cannot be found"

San Andreas Multiplayer **không** phải là một chương trình độc lập! Nó thêm chức năng multiplayer vào San Andreas, vì vậy bạn cần GTA San Andreas cho PC - nó cũng cần phải là **EU/US v1.0**, các phiên bản khác như v2.0 hoặc các phiên bản Steam và Direct2Drive sẽ không hoạt động. [Nhấp vào đây để tải bản vá để hạ cấp phiên bản GTA: SA của bạn xuống 1.0](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### Tôi không thể thấy bất kỳ máy chủ nào trong trình duyệt SA:MP

Trình duyệt SA:MP không hoạt động. Tải xuống [trình khởi động open.mp mới](https://github.com/openmultiplayer/launcher/releases/latest).
Nếu bạn vẫn không thể thấy bất kỳ máy chủ nào, bạn phải cho phép open.mp truy cập qua tường lửa của bạn. Rất tiếc, do số lượng phần mềm tường lửa có sẵn rất lớn, chúng tôi không thể cung cấp thêm hỗ trợ về vấn đề này - chúng tôi gợi ý bạn xem trang web của nhà sản xuất hoặc tìm kiếm trên Google. Cũng đảm bảo rằng bạn đã có phiên bản open.mp ổn định mới nhất!

### Singleplayer tải thay vì SA:MP

:::warning

Bạn không nên thấy các tùy chọn singleplayer (game mới, tải game, v.v.) - SA:MP nên tự động tải và không hiển thị các tùy chọn này. Nếu bạn thấy "game mới", singleplayer đã được tải, không phải San Andreas Multiplayer.

:::

Singleplayer có thể tải vì 2 lý do; bạn đã cài đặt SA:MP vào thư mục sai hoặc bạn có phiên bản San Andreas sai. Nếu bạn có phiên bản sai, bạn có thể hạ cấp trò chơi của bạn bằng cách sử dụng GTA San Andreas downgrader. Nhấp [vào đây](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661) để tải xuống.

Đôi khi menu single player sẽ được hiển thị, nhưng SA:MP thực sự đã tải đúng cách. Để khắc phục điều này, bạn chỉ cần chọn một mục trong menu, sau đó nhấn phím escape để thoát khỏi nó. SA:MP sau đó sẽ tiếp tục tải.

### Tôi nhận được "Unacceptable Nickname" khi kết nối với máy chủ

Đảm bảo rằng bạn không sử dụng bất kỳ ký tự không được phép nào trong tên của bạn (chỉ sử dụng 0-9, a-z, \[\], (), \$, @, ., \_ và =), và tên của bạn không dài hơn 20 ký tự. Điều này cũng có thể xảy ra khi một người chơi đang trên một máy chủ có tên giống bạn (điều này có thể xảy ra nếu bạn kết nối lại với máy chủ nhanh chóng sau khi bị ngắt kết nối hoặc bị lỗi). Một máy chủ Windows chạy SA:MP với thời gian hoạt động hơn 50 ngày đôi khi có thể gây ra lỗi này.

### Màn hình dừng lại ở "Connecting to IP:Port..."

Máy chủ có thể đang offline, hoặc nếu bạn không thể kết nối với bất kỳ máy chủ nào, hãy tắt tường lửa của bạn và xem nếu nó hoạt động. Nếu có, bạn sẽ cần phải cấu hình lại tường lửa của bạn. Cũng có thể là bạn đang chạy phiên bản SA:MP lỗi thời - bạn có thể tìm thấy các phiên bản mới [tại đây](https://sa-mp.mp/downloads/).

### Tôi có một GTA: San Andreas đã được sửa đổi và SA:MP không tải

Nếu nó không tải, hãy gỡ bỏ các mod của bạn.

### Khi khởi động GTA với SA:MP, nó không bắt đầu

Xóa tệp gta_sa.set khỏi thư mục file người dùng của bạn và đảm bảo rằng bạn không có bất kỳ cheat/mod nào.

### Trò chơi bị lỗi khi một phương tiện phát nổ

Nếu bạn có 2 màn hình thì có 3 cách để giải quyết:

1. Tắt màn hình thứ 2 của bạn khi chơi sa-mp. (Có thể không phải là ý tưởng hay nếu bạn muốn giữ màn hình bật.)
2. Đặt chất lượng Visual FX của bạn ở mức thấp. (Esc > Options > Display Setup > Advanced)
3. Đổi tên thư mục GTA San Andreas của bạn (ví dụ: "GTA San Andreas2") (Điều này thường hoạt động, tuy nhiên đôi khi có thể ngừng hoạt động trở lại nên bạn cần đổi tên nó thành cái gì đó khác.)

### Chuột của tôi không hoạt động sau khi thoát khỏi menu tạm dừng

Nếu chuột của bạn dường như bị đóng băng trong game trong khi nó (một phần) hoạt động trong menu tạm dừng, bạn nên tắt tùy chọn đa lõi [sa-mp.cfg](ClientCommands#file-sa-mpcfg "Sa-mp.cfg") (đặt thành 0). Nhấn liên tục phím Escape cho đến khi chuột phản hồi trở lại cũng có thể hoạt động, nhưng đây không phải là giải pháp hoàn hảo.

### Tệp dinput8.dll bị thiếu

Điều này có thể xảy ra khi DirectX không được cài đặt đúng cách, hãy thử cài đặt lại - đừng quên khởi động lại máy tính của bạn. Nếu vấn đề vẫn xảy ra, hãy vào C:\\Windows\\System32 và sao chép tệp dinput.dll vào thư mục gốc của GTA San Andreas của bạn. Điều này sẽ giải quyết vấn đề.

### Tôi không thể thấy nametag của người chơi khác!

Hãy lưu ý rằng một số máy chủ có thể đã tắt nametag toàn cầu. Nếu không, vấn đề này thường xảy ra trên máy tính với các bộ xử lý đồ họa tích hợp Intel HD (mà không thực sự phù hợp cho chơi game). Rất tiếc, nguyên nhân chính xác không rõ và hiện tại không có giải pháp chung nào sẵn có. Một cách khắc phục lâu dài là cài đặt thẻ đồ họa chuyên dụng trong máy tính của bạn, nếu điều này có thể và ngân sách của bạn cho phép.

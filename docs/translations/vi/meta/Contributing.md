---

title: Contributing
description: How to contribute to the SA-MP Wiki and open.mp documentation.

---

Tài liệu này mở để bất kỳ ai cũng có thể đóng góp thay đổi! Tất cả những gì bạn cần là một tài khoản [GitHub](https://github.com) và một chút thời gian rảnh. Bạn thậm chí không cần phải biết Git, bạn có thể thực hiện tất cả từ giao diện web!

Nếu bạn muốn giúp duy trì một ngôn ngữ cụ thể, hãy mở một PR đối với tệp [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) và thêm một dòng cho thư mục ngôn ngữ của bạn với tên người dùng của bạn.

## Chỉnh Sửa Nội Dung

Trên mỗi trang, có một nút dẫn bạn đến trang GitHub để chỉnh sửa:

![Liên kết Chỉnh sửa trang này xuất hiện trên mỗi trang wiki](images/contributing/edit-this-page.png)

Ví dụ, nhấp vào liên kết này trên [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) sẽ dẫn bạn đến [trang này](https://github.com/openmultiplayer/web/blob/master/docs/scripting/functions/SetVehicleAngularVelocity.md) nơi bạn sẽ thấy một trình soạn thảo văn bản để thực hiện các thay đổi cho tệp (giả sử bạn đã đăng nhập vào GitHub).

Thực hiện chỉnh sửa của bạn và gửi một "Pull Request". Điều này có nghĩa là các quản trị viên Wiki và các thành viên cộng đồng khác có thể xem xét thay đổi của bạn, thảo luận về việc nó có cần thay đổi thêm hay không và sau đó hợp nhất nó.

## Thêm Nội Dung Mới

Việc thêm nội dung mới có phần phức tạp hơn. Bạn có thể thực hiện theo hai cách:

### Giao Diện GitHub

Khi duyệt qua một thư mục trên GitHub, có một nút Thêm tệp ở góc trên bên phải của danh sách tệp:

![Nút Thêm tệp](images/contributing/add-new-file.png)

Bạn có thể tải lên một tệp Markdown mà bạn đã viết sẵn hoặc viết trực tiếp vào trình soạn thảo văn bản của GitHub.

Tệp _phải_ có phần mở rộng `.md` và chứa Markdown. Để biết thêm thông tin về Markdown, hãy xem [hướng dẫn này](https://guides.github.com/features/mastering-markdown/).

Khi xong, nhấn "Đề xuất tệp mới" và một Pull Request sẽ được mở để xem xét.

### Git

Nếu bạn muốn sử dụng Git, tất cả những gì bạn cần làm là sao chép kho Wiki bằng cách sử dụng:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Mở nó trong trình soạn thảo yêu thích của bạn. Tôi khuyến nghị Visual Studio Code vì nó có một số công cụ tuyệt vời để chỉnh sửa và định dạng các tệp Markdown. Như bạn thấy, tôi đang viết cái này bằng Visual Studio Code!

![Xem trước Markdown trong Visual Studio Code](images/contributing/vscode.png)

Tôi khuyên bạn sử dụng hai tiện ích mở rộng để cải thiện trải nghiệm của bạn:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) của David Anson - đây là một tiện ích mở rộng giúp đảm bảo Markdown của bạn được định dạng đúng. Nó ngăn ngừa một số lỗi cú pháp và ngữ nghĩa. Không phải tất cả các cảnh báo đều quan trọng, nhưng một số có thể giúp cải thiện khả năng đọc. Sử dụng phán đoán tốt nhất và nếu nghi ngờ, hãy hỏi một người đánh giá!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) của đội ngũ Prettier.js - đây là một định dạng sẽ tự động định dạng các tệp Markdown của bạn để tất cả sử dụng cùng một phong cách nhất quán. Kho Wiki có một số cài đặt trong `package.json` mà tiện ích mở rộng nên tự động sử dụng. Đảm bảo bật "Format On Save" trong cài đặt trình soạn thảo của bạn để các tệp Markdown của bạn sẽ được tự động định dạng mỗi khi bạn lưu!

## Ghi Chú, Mẹo và Quy Ước

### Liên Kết Nội Bộ

Không sử dụng URL tuyệt đối cho các liên kết giữa các trang. Sử dụng đường dẫn tương đối.

- ❌

  ```md
  Để sử dụng với [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  Để sử dụng với [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` có nghĩa là "lên một thư mục" vì vậy nếu tệp bạn đang chỉnh sửa nằm trong thư mục `functions` và bạn đang liên kết đến `callbacks` thì bạn sử dụng `../` để lên thư mục `scripting/` sau đó `callbacks/` để vào thư mục callbacks, rồi tên tệp (không có `.md`) của callback bạn muốn liên kết.

### Hình Ảnh

Hình ảnh nằm trong một thư mục con trong `/static/images`. Khi bạn liên kết một hình ảnh trong `![]()`, chỉ cần sử dụng `/images/` làm đường dẫn cơ sở (không cần `static`, đó chỉ là để cho kho lưu trữ).

Nếu nghi ngờ, hãy đọc một trang khác sử dụng hình ảnh và sao chép cách thực hiện ở đó.

### Metadata

Điều đầu tiên trong _bất kỳ_ tài liệu nào ở đây nên là metadata:

```mdx
---
title: Tài Liệu Của Tôi
description: Đây là một trang về những thứ và bánh hamburger, vui quá!
---
```

Mỗi trang nên bao gồm tiêu đề và mô tả.

Để biết danh sách đầy đủ những gì có thể đặt giữa `---`, hãy xem [tài liệu Docusaurus](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Đầu Mục

Đừng tạo tiêu đề cấp 1 (`<h1>`) với `#` vì điều này được tạo tự động. Tiêu đề đầu tiên của bạn _luôn luôn_ nên là `##`

- ❌

  ```md
  # Tiêu Đề Của Tôi

  Đây là tài liệu cho ...

  # Tiểu Mục
  ```

- ✔

  ```md
  Đây là tài liệu cho ...

  ## Tiểu Mục
  ```

### Sử Dụng `Code` Đoạn Mã Để Tham Chiếu Kỹ Thuật

Khi viết một đoạn văn chứa tên hàm, số, biểu thức hoặc bất cứ điều gì không phải ngôn ngữ viết chuẩn, hãy bao quanh chúng bằng \`backticks\` như vậy. Điều này giúp dễ dàng phân biệt giữa ngôn ngữ mô tả và các yếu tố kỹ thuật như tên hàm và đoạn mã.

- ❌

  > Hàm fopen sẽ trả về một giá trị có thẻ kiểu File:, không có vấn đề gì trên dòng đó vì giá trị trả về đang được lưu vào một biến cũng có thẻ kiểu File: (lưu ý các trường hợp cũng giống nhau). Tuy nhiên trên dòng tiếp theo giá trị 4 được thêm vào tay cầm tệp. 4 không có thẻ [...]

- ✔

  > Hàm `fopen` sẽ trả về một giá trị có thẻ kiểu `File:`, không có vấn đề gì trên dòng đó vì giá trị trả về đang được lưu vào một biến cũng có thẻ kiểu `File:` (lưu ý các trường hợp cũng giống nhau). Tuy nhiên trên dòng tiếp theo giá trị `4` được thêm vào tay cầm tệp. `4` không có thẻ

Trong ví dụ trên, `fopen` là tên của hàm, không phải là từ tiếng Anh, vì vậy việc bao quanh nó bằng dấu `code` giúp phân biệt nó với nội dung khác.

Ngoài ra, nếu đoạn văn đề cập đến một đoạn mã ví dụ, điều này giúp người đọc liên kết các từ với ví dụ.

### Bảng

Nếu bảng có tiêu đề, chúng nằm ở phần trên:

- ❌

  ```md
  |         |                                      |
  | ------- | ------------------------------------ |
  | Sức Khỏe | Tình Trạng Động Cơ                     |
  | 650     | Không bị hỏng                          |
  | 650-550 | Khói trắng                            |
  | 550-390 | Khói xám                              |
  | 390-250 | Khói đen                              |
  | < 250   | Bị cháy (sẽ nổ trong vài giây)       |
  ```

- ✔

  ```md
  | Sức Khỏe | Tình Trạng Động Cơ                     |
  | ------- | ------------------------------------ |
  | 650     | Không bị hỏng                          |
  | 650-550 | Khói trắng                            |
  | 550-390 | Khói xám                              |
  | 390-250 | Khói đen                              |
  | < 250   | Bị cháy (sẽ nổ trong vài giây)       |
  ```

## Di Chuyển Từ SA-MP Wiki

Hầu hết nội dung đã được chuyển, nhưng nếu bạn tìm thấy một trang bị thiếu, đây là hướng

 dẫn cách tìm nội dung trên [SA-MP Wiki](https://sampwiki.blast.hk).

### Sửa Đổi

- Tìm và sao chép nội dung từ [SA-MP Wiki](https://sampwiki.blast.hk) và sau đó làm theo các bước chỉnh sửa hoặc thêm nội dung mới được mô tả ở trên.

Nếu bạn phát hiện lỗi hoặc có câu hỏi, hãy liên hệ với chúng tôi qua [Discord](https://discord.open.mp). Cảm ơn bạn đã góp phần!
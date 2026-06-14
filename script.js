// ==========================================
// 1. KHO DỮ LIỆU KHỔNG LỒ (30 PHIM + 60 DIỄN VIÊN)
// ==========================================
const dsPhim = [
    { 
        id: "1", 
        ten: "Cửu Trùng Tử", 
        anhPhim: "ctt..jpg", 
        theLoai: "Cổ Đại", 
        dvNam: "Lý Quân Nhuệ", 
        dvNu: "Mạnh Tử Nghĩa", 
        daoDien: "Tăng Khánh Kiệt", 
        ngay: "2024", 
        tap: "34", 
        moTa: "Phim kể về hành trình của Đậu Chiêu – cô gái mang theo ký ức đau thương sống lại sau một kiếp đời bi kịch. Nàng gặp gỡ và đồng hành cùng Tống Mặc, thế tử của phủ Anh quốc công. Cả hai cùng vượt qua những âm mưu quyền lực, chữa lành tổn thương và thay đổi vận mệnh. Tên phim cũng mang ý nghĩa biểu tượng cho một loài hoa có sức sống kiên cường, sinh sôi nảy nở ngay trong nghịch cảnh",
        danhGia: "Visual Mạnh Tử Nghĩa, Lý Quân Nhuệ đúng là cứu rỗi thế giới!", 
        diem: 10,
        trailer: "CTT.mp4"
    },
    { id: "2", 
    ten: "Cẩm Nguyệt Như Ca",
    anhPhim: "cnnc.jpg",
    theLoai: "Cổ Đại",
    dvNam: "Thừa Lỗi",
    dvNu: "Châu Dã",
    daoDien: "Tưởng Gia Tuấn",
    ngay: "2025",
    tap: "36", 
    moTa: "Cẩm Nguyệt Như Ca là bộ phim truyền hình cổ trang Hoa ngữ chuyển thể từ tiểu thuyết Nữ Tướng Tinh. Phim xoay quanh Hòa Yến (Châu Dã), tiểu thư quyền quý phải cải nam trang thay huynh trưởng tòng quân. Trải qua sinh tử, cô gặp lại Tiêu Giác (Thừa Lỗi), cùng anh vượt qua sóng gió và bảo vệ đất nước.",
    danhGia: "Châu Dã,Thừa Lỗi đẹp đôiiii quá trời!", 
    diem: 9.8, 
    trailer: "CNNC.mp4" },
    { id: "3", 
      ten: "Diên Hy Công Lược", 
      anhPhim: "dhcl.jpg", 
      theLoai: "Cung Đấu", 
      dvNam: "Nhiếp Viễn", 
      dvNu: "Ngô Cẩn Ngôn", 
      daoDien: "Huệ Giai Đống,Ôn Đức Quang", 
      ngay: "2018", 
      tap: "70",
       moTa: "Diên Hi Công Lược là bộ phim truyền hình cung đấu nổi tiếng của Trung Quốc, lấy bối cảnh triều đại nhà Thanh dưới thời vua Càn Long. Nội dung xoay quanh hành trình của thiếu nữ Ngụy Anh Lạc tiến cung để điều tra cái chết oan khuất của chị gái", 
       danhGia: "Kinh điển, xem mãi không chán.", 
       diem: 9.2, trailer: "DHCL.mp4" },
    { id: "4",
         ten: "Dĩ Ái Vi Doanh", 
         anhPhim: "davd.jpg", 
         theLoai: "Hiện Đại", 
         dvNam: "Vương Hạc Đệ", 
         dvNu: "Bạch Lộc", 
         daoDien: "Quách Hổ",
         ngay: "2023", 
         tap: "36", 
         moTa: "Dĩ Ái Vi Doanh (tên tiếng Anh: Only for Love) là bộ phim ngôn tình hiện đại Trung Quốc, kể về mối tình oan gia ngõ hẹp giữa nữ phóng viên tài năng Trịnh Thư Ý (Bạch Lộc) và tổng tài lạnh lùng Thời Yến (Vương Hạc Đệ)", 
         danhGia: "Vương Hạc Đệ Bạch Lộc đẹp đôi quáaa!", 
         diem: 9.5, 
         trailer: "DAVD.mp4" },
    { id: "5", 
        ten: "Vụng Trộm Không Thể Giấu", 
        anhPhim: "vtktg.jpg", 
        theLoai: "Thanh Xuân", 
        dvNam: "Trần Triết Viễn", 
        dvNu: "Triệu Lộ Tư", 
        daoDien: "Lý Thanh Dung", 
        ngay: "2023", 
        tap: "25", 
        moTa: "Vụng Trộm Không Thể Giấu là câu chuyện ngôn tình thanh xuân kể về mối tình thầm kín kéo dài nhiều năm của Tang Trĩ dành cho Đoàn Gia Hứa.", 
        danhGia: "Ngọt muốn sâu răng luôn.",
        diem: 9.6, 
        trailer: "VTKTG.mp4" },
    { id: "6", 
        ten: "Chiếc Bật Lửa Và Váy Công Chúa", 
        anhPhim: "cblvvcc.jpg", 
        theLoai: "Thanh Xuân", 
        dvNam: "Trần Phi Vũ", 
        dvNu: "Trương Tịnh Nghi", 
        daoDien: "Lưu Tuấn Kiệt, Mã Vy Vy", 
        ngay: "2022", 
        tap: "36", 
        moTa: "Chiếc bật lửa và váy công chúa là tiểu thuyết ngôn tình nổi tiếng của Twentine. Đây là câu chuyện thanh xuân khắc họa tình yêu đầy chông gai nhưng sâu sắc giữa Lý Tuân – chàng trai nổi loạn, thiên tài IT và Chu Vận – cô gái ngoan hiền, con nhà gia giáo", 
        danhGia: "Lý Tuân mãi đỉnh trong lòng tui.", 
        diem: 9.4, trailer: "CBLVVCC.mp4" },
    { id: "7", 
         ten: "Tình Yêu Anh Dành Cho Em",
         anhPhim: "tyadce.jpg", 
         theLoai: "Hiện Đại", 
         dvNam: "Vương Tử Kỳ", 
         dvNu: "Vương Ngọc Văn", 
         daoDien: "Đinh Anh Châu", 
         ngay: "2023", 
         tap: "28", 
         moTa: "Tình Yêu Anh Dành Cho Em (The Love You Give Me) là bộ phim ngôn tình hiện đại ngọt ngào, xoay quanh mối tình gương vỡ lại lành giữa Mẫn Tuệ (Vương Ngọc Văn) và tổng tài Tân Kỳ (Vương Tử Kỳ)", danhGia: "Gia đình này cute nhất quả đất.", 
         diem: 9.0, 
         trailer: "TYADCE.mp4" },
    { id: "8", 
        ten: "Đôi Mắt Thâm Tình", 
        anhPhim: "dmtt.jpg", 
        theLoai: "Hiện Đại", 
        dvNam: "Tất Văn Quân", 
        dvNu: "Trương Dư Hi", 
        daoDien: "Trương Tiếu An", 
        ngay: "2025", 
        tap: "26", 
        moTa: "Diệp Mộng, một phụ nữ ngoài 30 tuổi gặp bế tắc trong sự nghiệp, quyết định nghỉ việc về quê. Tại đây, cô tình cờ gặp gỡ Lý Cấn Tử – một chàng trai trẻ có đôi mắt đa tình, cuốn hút. Cả hai dần bị thu hút bởi đối phương và bắt đầu một chuyện tình ngọt ngào nhưng không kém phần hài hước.", 
        danhGia: "Màu phim rất thơ và sâu lắng.", 
        diem: 8.5, 
        trailer: "ĐMTT.mp4" },
    { id: "9", 
        ten: "Khói Lửa Nhân Gian", 
        anhPhim: "klngct.jpg", 
        theLoai: "Hiện Đại", 
        dvNam: "Dương Dương", 
        dvNu: "Vương Sở Nhiên", 
        daoDien: "Lý Mộc Qua", 
        ngay: "2023", tap: "40", 
        moTa: "Khói Lửa Nhân Gian Của Tôi là bộ phim ngôn tình Trung Quốc xoay quanh chuyện tình gương vỡ lại lành đầy cảm động giữa lính cứu hỏa Tống Diệm và bác sĩ cấp cứu Hứa Thấm. Từng là mối tình đầu sâu đậm nhưng bị gia đình ngăn cấm, họ gặp lại nhau sau nhiều năm, cùng nhau vượt qua ranh giới sinh tử và định kiến để viết tiếp cái kết viên mãn", 
        danhGia: "Visual Dương Dương 10 điểm không có nhưng.", diem: 8.0, trailer: "klngct.mp4" },
    { id: "10", ten: "Yêu Em", anhPhim: "ye.jpg", theLoai: "Hiện Đại", 
        dvNam: "Trương Lăng Hách", dvNu: "Từ Nhược Hàm", daoDien: "Xa Lượng Dật", ngay: "2025", tap: "28", 
        moTa: "Phim xoay quanh câu chuyện tình yêu giữa Thẩm Tích Phàm (một nữ quản lý khách sạn nghiện công việc) và Hà Tô Diệp (một anh chàng ấm áp, am hiểu về Đông y).", danhGia: "Diễn xuất của Trương Lăng Hách đỉnh chóp.", 
        diem: 9.1, trailer: "YE.mp4" },
    { id: "11", ten: "Yết Hí", anhPhim: "yh.jpg", theLoai: "Hiện Đại", 
        dvNam: "Trần Tinh Húc", dvNu: "Lư Dục Hiểu", daoDien: "Miêu Đích Thụ", ngay: "2026", tap: "28", 
        moTa: "Yết Hí (tên tiếng Anh: Love Between Lines) là bộ phim ngôn tình xoay quanh chuyện tình ngọt ngào và lãng mạn giữa thế giới ảo và đời thực", danhGia: "Trần Tinh Húc tái xuất quá đỉnh cao.", 
        diem: 8.7, trailer: "yh.mp4" },
    { id: "12", ten: "Trục Ngọc", anhPhim: "tn.jpg", theLoai: "Cổ Đại", 
        dvNam: "Trương Lăng Hách", dvNu: "Điền Hi Vi", daoDien: "Tăng Khánh Kiệt", ngay: "2026", tap: "40", 
        moTa: "Trục Ngọc là bộ phim truyền hình cổ trang ngôn tình Hoa ngữ xoay quanh mối tình cưới trước yêu sau giữa Phàn Trường Ngọc (Điền Hi Vi) – một cô gái mổ lợn có sức mạnh phi thường, lạc quan và Tạ Chinh (Trương Lăng Hách) – vị hầu gia thất thế mang theo mối huyết thù.", 
        danhGia: "Chemistry của Điền Hi Vi và Trương Lăng Hách yêuuu quá.", diem: 9.8, trailer: "TN.mp4" },
    { id: "13", ten: "Triều Tuyết Lục", anhPhim: "ttl.jpg", theLoai: "Cổ Đại", 
        dvNam: "Ngao Thụy Bằng", dvNu: "Lý Lan Địch", daoDien: "Trâu Việt", ngay: "2025", tap: "38", 
        moTa: "Triều Tuyết Lục là bộ phim truyền hình cổ trang trinh thám Trung Quốc. Phim kể về Thẩm Hoản, người duy nhất sống sót sau vụ án oan của gia tộc. Nàng phải giả danh tiểu thư Tần Hoản để nhập thân làm ngỗ tác (khám nghiệm tử thi) trà trộn điều tra, rửa oan cho cha. Đồng hành cùng nàng là Thế tử Yên Trì", 
        danhGia: "Ngao Thụy Bằng đóng cổ trang lạ mà hay.", diem: 8.9, trailer: "TTL.mp4" },
    { id: "14", ten: "Khi Anh Chạy Về Phía Em", anhPhim: "kacvpe.jpg", theLoai: "Thanh Xuân", 
        dvNam: "Chu Dực Nhiên", dvNu: "Trương Miểu Di", daoDien: "Miêu Đích Thụ", ngay: "2023", tap: "24", 
        moTa: "Khi Anh Chạy Về Phía Em là bộ phim thanh xuân vườn trường Trung Quốc ngọt ngào, xoay quanh chuyện tình đáng yêu giữa cô nữ sinh hoạt bát Tô Tại Tại và chàng trai lạnh lùng Trương Lục Nhượng. Sự kiên trì và ấm áp của Tại Tại đã dần sưởi ấm trái tim, giúp Lục Nhượng vượt qua mặc cảm tự ti để cùng nhau trưởng thành.", 
        danhGia: "Xem xong thấy yêu đời hẳn luôn.", diem: 9.7, trailer: "KACVPE.mp4" },
    { id: "15", ten: "Dưới Tán Cây Có Ngôi Nhà Mái Đỏ", anhPhim: "dtccnnmd.jpg", theLoai: "Hiện Đại", 
        dvNam: "Trạch Tiêu Văn", dvNu: "Dương Hật Tử", daoDien: "Trương Tiếu An", ngay: "2025", tap: "30", 
        moTa: "Dưới Tán Cây Có Ngôi Nhà Mái Đỏ (tên tiếng Anh: My Old My New) là bộ phim thanh xuân vườn trường Trung Quốc kể về nhóm bạn thân thiết Trần Hoan Nhĩ, Cảnh Tê Trì và Tống Tùng. Tác phẩm khắc họa hành trình trưởng thành đầy cảm xúc của họ từ ghế nhà trường đến khi bước vào đời, đối mặt với tình yêu và biến cố.", 
        danhGia: "Cảm động và rất nhân văn.", diem: 9.0, trailer: "dtccnnmd.mp4" },
    { id: "16", ten: "Xin Chào 1983", anhPhim: "1983.jpg", theLoai: "Hiện Đại", 
        dvNam: "Trạch Tiêu Văn", dvNu: "Châu Dã", daoDien: "Chúc Đông Ninh", ngay: "2026", tap: "36", 
        moTa: "Xin Chào 1983 là bộ phim hài – xuyên không Trung Quốc kể về Hạ Hiểu Lan (Châu Dã thủ vai), một nữ quản lý 36 tuổi thời hiện đại vô tình xuyên không về năm 1983. Cô nhập vào thân xác một cô gái nông thôn đang bị dồn vào đường cùng, từ đó dùng sự nhạy bén thương trường để khởi nghiệp làm giàu.", 
        danhGia: "Châu Dã quá thông minh", diem: 8.6, trailer: "1983.mp4" },
    { id: "17", ten: "Đừng Rung Động Vì Anh", anhPhim: "drdva.jpg", theLoai: "Hiện Đại", 
        dvNam: "Lâm Nhất", dvNu: "Châu Dã", daoDien: "Vu Trung Trung, Lý Thanh Dung", ngay: "2024", tap: "24", 
        moTa: "Đừng Rung Động Vì Anh (tên tiếng Anh: Everyone Loves Me) là bộ phim ngôn tình hài hước, lãng mạn xoay quanh mối tình trớ trêu nhưng không kém phần ngọt ngào giữa Nhạc Thiên Linh (Châu Dã) và Cố Tầm (Lâm Nhất).", 
        danhGia: "Cười đau bụng từng tập.", diem: 8.4, trailer: "drdva.mp4" },
    { id: "18", ten: "Khó Dỗ Dành", anhPhim: "kdd.jpg", theLoai: "Hiện Đại", 
        dvNam: "Bạch Kính Đình", dvNu: "Chương Nhược Nam", daoDien: "Cù Hữu Ninh", ngay: "2025", tap: "32", 
        moTa: "Khó dỗ dành (Nan Hống) là phim ngôn tình thanh xuân kể về mối tình gương vỡ lại lành giữa Tang Diên (Bạch Kính Đình) và Ôn Dĩ Phàm (Chương Nhược Nam). Từng bỏ lỡ nhau thời cấp ba, họ vô tình gặp lại và sống chung khi trưởng thành, cùng nhau vượt qua những tổn thương quá khứ để chữa lành cho nhau.", 
        danhGia: "Bạch Kính Đình đúng chuẩn Tang Diên.", diem: 9.2, trailer: "kdd.mp4" },
    { id: "19", ten: "Thượng Công Chúa", anhPhim: "tcc.jpg", theLoai: "Cổ Đại", 
        dvNam: "Lý Quân Nhuệ", dvNu: "Mạnh Tử Nghĩa", daoDien: "Tần Trăn", ngay: "2026", tap: "Chưa rõ", 
        moTa: "Thượng Công Chúa (chuyển thể từ tiểu thuyết của Y Nhân Khuê Khuê) xoay quanh Đan Dương công chúa Mộ Vãn Dao (Mạnh Tử Nghĩa). Tuân theo di mệnh, nàng rời Trường An đến Lĩnh Nam cầu phúc. Tại đây, nàng gặp và nảy sinh tình cảm với Ngôn Thượng. Cả hai cùng vượt qua nhiều thử thách để bảo vệ giang sơn.", 
        danhGia: "QKMN tình quáaaaaaaaaaa.", diem: 9.9, trailer: "tcc.mp4" },
    { id: "20", ten: "Tinh Hán Xán Lạn", anhPhim: "thxl.jpg", theLoai: "Cổ Đại", 
        dvNam: "Ngô Lỗi", dvNu: "Triệu Lộ Tư", daoDien: "Phí Chấn Tường", ngay: "2022", tap: "56", 
        moTa: "Tinh Hán Xán Lạn là bộ phim truyền hình cổ trang Trung Quốc kể về hành trình trưởng thành và tình yêu đầy sóng gió giữa Lăng Bất Nghi (Ngô Lỗi) - vị tướng quân mang huyết hải thâm thù, và Trình Thiếu Thương (Triệu Lộ Tư) - cô gái thiếu thốn tình thương từ nhỏ. Họ tìm thấy sự đồng điệu, cùng nhau vượt qua âm mưu triều đình và chữa lành tổn thương..", 
        danhGia: "Xem 10 lần vẫn thấy hay.", diem: 9.9, trailer: "" },
    { id: "21", ten: "Nhập Thanh Vân", anhPhim: "ntv.jpg", theLoai: "Cổ Đại", 
        dvNam: "Hầu Minh Hạo", dvNu: "Lư Dục Hiểu", daoDien: "Bành Học Quân", ngay: "2025", tap: "36", 
        moTa: "Nhập Thanh Vân là phim cổ trang tiên hiệp Trung Quốc kể về màn đấu trí căng thẳng giữa nữ chiến thần Minh Ý (Lư Dục Hiểu) và tội nhân Kỷ Bá Tể (Hầu Minh Hạo). Vì cần thuốc giải độc, Minh Ý phải cải trang tiếp cận kẻ thù, tạo nên câu chuyện tình yêu kẻ thù hóa người yêu đầy ngọt ngào và kịch tính", 
        danhGia: "Hầu Minh Hạo visual cực phẩm.", diem: 8.5, trailer: "ntv.mp4" },
    { id: "22", ten: "Khom Lưng", anhPhim: "kl'.jpg", theLoai: "Cổ Đại", 
        dvNam: "Lưu Vũ Ninh", dvNu: "Tống Tổ Nhi", daoDien: "Đặng Khoa", ngay: "2025", tap: "36", 
        moTa: "Phim xoay quanh chuyện tình đầy duyên nợ giữa Tiểu Kiều (Tống Tổ Nhi) và Ngụy Thiệu (Lưu Vũ Ninh). Bối cảnh diễn ra vào thời kỳ loạn lạc cuối Đông Hán, hai gia tộc vướng vào ân oán thù hận từ đời trước. Để bảo vệ an toàn cho bản thân và gia đình, Tiểu Kiều buộc phải gả cho Ngụy Thiệu – một vị tướng quân lạnh lùng, dũng mãnh. Khởi đầu bằng một cuộc liên hôn mang đầy sự nghi kỵ và thù địch, cả hai dần thấu hiểu, hóa giải hận thù và nảy sinh tình yêu sâu đậm trong thời chiến loạn.", 
        danhGia: "Chờ phim này mê luôn.", diem: 9.0, trailer: "kl.mp4" },
    { id: "23", ten: "Còn Ra Thể Thống Gì Nữa", anhPhim: "crttgn.jpg", theLoai: "Cổ Đại", 
        dvNam: "Thừa Lỗi", dvNu: "Vương Sở Nhiên", daoDien: "Lưu Hải Ba", ngay: "2026", tap: "32", 
        moTa: "Còn Ra Thể Thống Gì Nữa là phim cổ trang hài hước/xuyên không (32 tập), xoay quanh nữ nhân viên công sở Vương Thúy Hoa xuyên vào tiểu thuyết, trở thành ác nữ Dữu Vãn Âm. Cô bắt tay với bạo chúa (cũng là người xuyên không) thay đổi cốt truyện, tạo nên những tình huống dở khóc dở cười.", danhGia: "Vươmg Sở Nhiên hợp yêu pgi quá", 
        diem: 9.5, trailer: "crttgn.mp4" },
    { id: "24", ten: "Mặc Vũ Vân Gian", anhPhim: "mvng.jpg", theLoai: "Cổ Đại",
         dvNam: "Vương Tinh Việt", dvNu: "Ngô Cẩn Ngôn", daoDien: "Lữ Hạo Cát Cát", ngay: "2024", tap: "40", 
         moTa: "Mặc Vũ Vân Gian (The Double) là bộ phim cổ trang báo thù nổi tiếng. Phim kể về Tiết Phương Phỉ, thiên kim tiểu thư bị gia đình chồng hãm hại để che giấu tội ác. Sống sót sau biến cố, cô lấy thân phận của Khương Lê – tiểu thư của Tể tướng đã khuất – để trở về kinh thành", 
         danhGia: "A Việt hot quá, mê mệt!", diem: 9.5, trailer: "mvng.mp4" },
    { id: "25", ten: "Nhất Kiến Khuynh Tâm", anhPhim: "nkkt.jpg", theLoai: "Dân Quốc", 
        dvNam: "Trần Tinh Húc", dvNu: "Trương Tịnh Nghi", daoDien: "Lâm Kiện Long và Trần Quốc Hoa đồng", ngay: "2021", tap: "38", 
        moTa: "là bộ phim ngôn tình dân quốc Trung Quốc lấy bối cảnh Thượng Hải năm 1926. Phim xoay quanh tiểu thư Mộc Uyển Khanh bắt tay với thiếu soái Đàm Huyền Lâm và chàng thiếu gia Từ Quang Diệu để điều tra cái chết oan khuất của gia đình, từ đó trải qua mối tình tay ba đầy cảm xúc và định mệnh..", 
        danhGia: "Trần Tinh Húc mặc quân phục quá soái.", diem: 8.7, trailer: "nkkt.mp4" },
    { id: "26", ten: "Giây Phút Ấy Vượt Giới Hạn", anhPhim: "gpanvgh.jpg", theLoai: "Hiện Đại", 
        dvNam: "Trương Lăng Hách", dvNu: "Vương Sở Nhiên", daoDien: "Dịch Quân", ngay: "2026", tap: "Chữa Rõ", 
        moTa: " (tên khác: Giây Phút Ấy Quá Giới Hạn) là dự án phim ngôn tình dân quốc bi tráng, chuyển thể từ tiểu thuyết của Phỉ Ngã Tư Tồn. Tác phẩm xoay quanh mối tình đầy trắc trở, yêu hận đan xen giữa thiếu gia Mộ Dung Thanh Dịch (Trương Lăng Hách) và cô tiểu thư Nhậm Tố Tố (Vương Sở Nhiên) tại Thượng Hải những năm 1920", 
        danhGia: "Cung Tuấn đóng hiện đại rất ổn.", diem: 8.4, trailer: "gpanvgh.mp4" },
    { id: "27", ten: "Chiết Ánh Trăng", anhPhim: "cat.jpg", theLoai: "Hiện Đại", 
        dvNam: "Lâm Nhất", dvNu: "Lư Dục Hiểu", daoDien: "Trương Bác Dục", ngay: "2026", tap: "Chưa Rõ", 
        moTa: "Vân Ly là một cô gái mắc chứng sợ giao tiếp nhẹ, dũng cảm rời xa vòng tay gia đình để theo đuổi đam mê tại vùng đất Nam Vu. Tại đây, cô gặp gỡ và đồng hành cùng nam chính trong hành trình học nghề làm mực truyền thống đầy công phu.", 
        danhGia: "Tui mong chờ Lâm Nhất quá điiii.", diem: 9.6, trailer: "cat.mp4" },
    { id: "28", ten: "Bách Hoa Sát", anhPhim: "bhs.jpg", theLoai: "Cổ Đại", 
        dvNam: "Hà Dữ", dvNu: "Mạnh Tử Nghĩa", daoDien: "Chung Thanh", ngay: "2026", tap: "Chưa Rõ", 
        moTa: "Bách Hoa Sát là phim cổ trang quyền mưu Trung Quốc do Mạnh Tử Nghĩa và Hà Dữ đóng chính, kể về cuộc đấu trí cung đình giữa Thái tử giả bệnh tâm cơ và Quận chúa biên cương mạnh mẽ, nơi họ vừa lợi dụng vừa bảo vệ nhau.", danhGia: "Mạnh Tử Nghĩa xinh dịii.", 
        diem: 9.8, trailer: "bhs.mp4" },
    { id: "29", ten: "Chó Hoang Và Xương", anhPhim: "chvx.jpg", theLoai: "Hiện Đại", 
        dvNam: "Tống Uy Long", dvNu: "Trương Tịnh Nghi", daoDien: "Lưu Tuấn Kiệt", ngay: "2026", tap: "Chưa Rõ", 
        moTa: "Lấy bối cảnh thập niên 1990, truyện kể về Trần Dị và Miêu Tĩnh. Cả hai đều mang trong mình những vết thương lòng và hoàn cảnh sống khắc nghiệt. Từ chỗ không đánh không quen, họ dần nảy sinh tình cảm, nương tựa vào nhau để vượt qua nghịch cảnh.", 
        danhGia: "Phim bối cảnh đẹp quá trời.", diem: 8.6, trailer: "chvx.mp4" },
    { id: "30", ten: "Sa Vào Tình Yêu Cuồng Nhiệt Của Chúng Ta", anhPhim: "svtycnctt.jpg", theLoai: "Hiện Đại", 
            dvNam: "Vương An Vũ", dvNu: "Lưu Hạo Tồn", daoDien: "Liễu Quảng Huy", ngay: "2025", tap: "24", 
            moTa: "Đó là một mùa hè rực rỡ và mãnh liệt tại Khánh Nghi. Tình yêu của họ bắt đầu bằng sự rung động tuổi trẻ, nhanh chóng cuốn vào nhau bằng những cái ôm, nụ hôn nồng cháy, sự thấu hiểu sâu sắc và một kết nối cảm xúc ngập tràn đam mê", 
            danhGia: "Lưu Hạo Tồn xinh xỉu trong mọi khung hình.", diem: 8.9, trailer: "svtycnctt.mp4" },
             { id: "31", ten: "Chói Mắt", anhPhim: "cm.jpg", theLoai: "Hiện Đại", 
            dvNam: "Lý Quân Nhuệ", dvNu: "Quan Hiểu Đồng", daoDien: "Chúc Đông Ninh", ngay: "2026", tap: "30", 
            moTa: "Phim kể về Tình Dã (Quan Hiểu Đồng) - một tiểu thư giàu có người Bắc Kinh, vì biến cố gia đình mà phải chuyển về thị trấn ven biển có tên Trát Trát Đình. Tại đây, cô gặp gỡ thiếu niên Hình Vũ (Lý Quân Nhuệ). Từ những ấn tượng không tốt ban đầu, hai người dần trở thành chỗ dựa, cùng nhau vượt qua khó khăn, trưởng thành và cứu rỗi cuộc đời nhau từ những năm tháng cấp ba cho đến khi lên đại học rồi xa cách.", 
            danhGia: "Lý Quân Nhuệ tóc vàng là thầnnnn.", diem: 8.9, trailer: "cm.mp4" },
    { id: "32", ten: "Mạc Ly", anhPhim: "ml.jpg", theLoai: "Cổ Đại", 
            dvNam: "Thừa Lỗi", dvNu: "Bạch Lộc", daoDien: "Lâm Ngọc", ngay: "2026", tap: "40", 
            moTa: "Mạc Ly là dự án phim truyền hình cổ trang, quyền mưu và tình cảm nổi bật của Trung Quốc, được chuyển thể từ tiểu thuyết nổi tiếng Thịnh Thế Đích Phi của tác giả Phượng Khinh. Phim thuộc dòng đại nữ chủ, xoay quanh hành trình trưởng thành và chuyện tình yêu đầy thử thách.", 
            danhGia: "Mong chờ bộ này quass.", diem: 8.9, trailer: "ml.mp4" }
]
const dsDienVien = [
    { ten: "Lý Quân Nhuệ", gt: "Nam", anh: "lyr.jpg", dob: "24/08/1996", cao: "1m82", bio: "WB:https://weibo.com/u/5172843865" },
    { ten: "Thừa Lỗi", gt: "Nam", anh: "tl.jpg", dob: "18/12/1993", cao: "1m81", bio: "WB:https://weibo.com/u/1564082770" },
    { ten: "Nhiếp Viễn", gt: "Nam", anh: "nv.jpg", dob: "17/03/1978", cao: "1m77", bio: "WB:https://weibo.com/u/1195379710" },
    { ten: "Vương Hạc Đệ", gt: "Nam", anh: "vhd.jpg", dob: "20/12/1998", cao: "1m83", bio:"WB:https://weibo.com/u/2731728324" },
    { ten: "Trần Triết Viễn", gt: "Nam", anh: "ttvv.jpg", dob: "29/10/1996", cao: "1m80", bio: "WB:https://weibo.com/u/1806963941" },
    { ten: "Trần Phi Vũ", gt: "Nam", anh: "tpv.jpg", dob: "09/04/2000", cao: "1m88", bio: "WB:https://weibo.com/u/1106068030" },
    { ten: "Vương Tử Kỳ", gt: "Nam", anh: "vtk.jpg", dob: "25/02/1996", cao: "1m85", bio: "WB:https://weibo.com/u/5999417377" },
    { ten: "Tất Văn Quân", gt: "Nam", anh: "tvq.jpg", dob: "21/11/1997", cao: "1m87", bio: "WB:https://weibo.com/u/6412297026" },
    { ten: "Dương Dương", gt: "Nam", anh: "dd.jpg", dob: "09/09/1991", cao: "1m80", bio: "WB:https://weibo.com/u/1815418641" },
    { ten: "Trương Lăng Hách", gt: "Nam", anh: "tlh.jpg", dob: "30/12/1997", cao: "1m90", bio: "WB:https://weibo.com/u/7051114584" },
    { ten: "Trần Tinh Húc", gt: "Nam", anh: "tth.jpg", dob: "31/03/1996", cao: "1m86", bio: "WB:https://weibo.com/u/1345665664" },
    { ten: "Ngao Thụy Bằng", gioiTinh: "Nam", anh: "ntb.jpg", dob: "06/10/1995", cao: "1m88", bio: "WB:https://weibo.com/u/5643994130" },
    { ten: "Chu Dực Nhiên", gt: "Nam", anh: "cdn.jpg", dob: "22/11/2000", cao: "1m82", bio: "WB:https://weibo.com/u/5994946077" },
    { ten: "Trạch Tiêu Văn", gt: "Nam", anh: "ttv.jpg", dob: "28/05/1999", cao: "1m86", bio: "WB:https://weibo.com/u/5230931257" },
    { ten: "Lâm Nhất", gt: "Nam", anh: "ln.jpg", dob: "04/08/2000", cao: "1m83", bio: "Mỹ nam trẻ đầy triển vọng." },
    { ten: "Ngô Lỗi", gt: "Nam", anh: "nl.jpg", dob: "26/12/1999", cao: "1m82", bio: "WB:https://weibo.com/u/2142058927" },
    { ten: "Hầu Minh Hạo", gt: "Nam", anh: "hmh.jpg", dob: "03/08/1997", cao: "1m79", bio: "WB:https://weibo.com/u/1831550987" },
    { ten: "Vương Tinh Việt", gt: "Nam", anh: "vtv.jpg", dob: "05/03/2000", cao: "1m84", bio: "WB:https://weibo.com/u/3023889587" },
    { ten: "Hà Dữ", gt: "Nam", anh: "hd.jpg", dob: "26/08/1996", cao: "1m83", bio: "WB:https://weibo.com/u/2794790945" },
    { ten: "Lưu Vũ Ninh", gt: "Nam", anh: "lvn.jpg", dob: "8/01/1990", cao: "1m91", bio: "WB:https://weibo.com/u/5456865382" },
    { ten: "Tống Uy Long", gt: "Nam", anh: "tul.jpg", dob: "05/07/1987", cao: "1m80", bio: "WB:https://weibo.com/u/5659134235" },
    { ten: "Vương An Vũ", gt: "Nam", anh: "vav.jpg", dob: "03/02/1998", cao: "1m83", bio: "WB:https://weibo.com/u/2761630725" },
    { ten: "Bạch Kính Đình", gt: "Nam", anh: "bkd.jpg", dob: "15/10/1993", cao: "1m83", bio: "WB:https://weibo.com/u/2112496475" },


    // 30 NU CHINH
    { ten: "Mạnh Tử Nghĩa", gt: "Nữ", anh: "mtn.jpg", dob: "05/12/1995", cao: "1m70", bio: "WB:https://weibo.com/u/2569522534" },
    { ten: "Châu Dã", gt: "Nữ", anh: "cy.jpg", dob: "20/05/1998", cao: "1m65", bio: "WB:https://weibo.com/u/6741964788" },
    { ten: "Ngô Cẩn Ngôn", gt: "Nữ", anh: "ncn.jpg", dob: "16/08/1990", cao: "1m65", bio: "WB:https://weibo.com/u/1278603180" },
    { ten: "Bạch Lộc", gt: "Nữ", anh: "bll.jpg", dob: "23/09/1994", cao: "1m65", bio: "WB:https://weibo.com/u/2616380702" },
    { ten: "Triệu Lộ Tư", gt: "Nữ", anh: "tlt.jpg", dob: "09/11/1998", cao: "1m61", bio: "Nàng thơ ngọt ngào thanh xuân." },
    { ten: "Trương Tịnh Nghi", gt: "Nữ", anh: "ttnn.jpg", dob: "10/07/1999", cao: "1m68", bio: "WB:https://weibo.com/u/6387099968" },
    { ten: "Vương Ngọc Văn", gt: "Nữ", anh: "vnv.jpg", dob: "28/05/1997", cao: "1m66", bio: "WB:https://weibo.com/u/2449552120" },
    { ten: "Trương Dư Hi", gt: "Nữ", anh: "tdh.jpg", dob: "29/01/1993", cao: "1m68", bio: "WB:https://weibo.com/raylizhangyuxi" },
    { ten: "Vương Sở Nhiên", gt: "Nữ", anh: "vsn.jpg", dob: "21/01/1999", cao: "1m72", bio: "WB:https://weibo.com/u/3828809034" },
    { ten: "Từ Nhược Hàm", gt: "Nữ", anh: "tnh.jpg", dob: "27/02/1998", cao: "1m65", bio: "WB:https://weibo.com/u/1811903663" },
    { ten: "Lư Dục Hiểu", gt: "Nữ", anh: "ldh.jpg", dob: "28/09/1999", cao: "1m65", bio: "WB:https://weibo.com/u/5503575607" },
    { ten: "Điền Hi Vi", gt: "Nữ", anh: "dhv.jpg", dob: "14/10/1997", cao: "1m68", bio: "WB:https://weibo.com/u/2731935637" },
    { ten: "Lý Lan Địch", gt: "Nữ", anh: "lld.jpg", dob: "02/09/1999", cao: "1m63", bio: "WB:https://weibo.com/u/1265743747" },
    { ten: "Trương Miểu Di", gt: "Nữ", anh: "tmd.jpg", dob: "13/09/1998", cao: "1m63", bio: "WB:https://weibo.com/u/2183765897" },
    { ten: "Dương Hật Tử", gt: "Nữ", anh: "dht.jpg", dob: "18/03/2000", cao: "1m65", bio: "WB:https://weibo.com/u/2265582003" },
    { ten: "Chương Nhược Nam", gt: "Nữ", anh: "cnn.jpg", dob: "14/11/1996", cao: "1m66", bio: "WB:https://weibo.com/u/2607803303" },
    { ten: "Lưu Hạo Tồn", gt: "Nữ", anh: "lhc.jpg", dob: "20/05/1998", cao: "1m65", bio: "WB:https://weibo.com/u/3932588380" },
    { ten: "Tống Tổ Nhi", gt: "Nữ", anh: "ttn (2).jpg", dob: "23/05/1998", cao: "1m65", bio: "WB:https://weibo.com/u/2440179153" },
    { ten: "Quan Hiểu Đồng", gt: "Nữ", anh:"qhd.jpg", dob: "23/05/1998", cao: "1m65", bio: "WB:https://weibo.com/u/1288739185" }
];

let fullMoTa = "";

function veSao(diem) {
    let sao = "";
    const vang = Math.round(diem / 2);
    for (let i = 1; i <= 5; i++) { sao += (i <= vang) ? "★" : "☆"; }
    return sao;
}

function hienThiTrangChu(data = dsPhim) {
    const list = document.getElementById("list-phim");
    if (!list) return;
    list.innerHTML = data.map(p => `
        <div class="movie-box">
            <img src="${p.anhPhim}">
            <h3>${p.ten}</h3>
            <a href="chitiet.html?id=${p.id}" class="btn-review">Xem Review</a>
        </div>`).join("");
}

function taoMenu() {
    const listNam = document.getElementById("menu-dv-nam");
    const listNu = document.getElementById("menu-dv-nu");
    const listTL = document.getElementById("menu-the-loai");
    if(listNam) listNam.innerHTML = dsDienVien.filter(d => d.gt === "Nam").map(d => `<li><a href="dienvien.html?ten=${encodeURIComponent(d.ten)}">${d.ten}</a></li>`).join("");
    if(listNu) listNu.innerHTML = dsDienVien.filter(d => d.gt === "Nữ").map(d => `<li><a href="dienvien.html?ten=${encodeURIComponent(d.ten)}">${d.ten}</a></li>`).join("");
    if(listTL) listTL.innerHTML = [...new Set(dsPhim.map(p => p.theLoai))].map(t => `<li><a href="index.html?search=${encodeURIComponent(t)}">${t}</a></li>`).join("");
}

function timKiemPhim() {
    const key = document.getElementById("search-input").value.toLowerCase();
    hienThiTrangChu(dsPhim.filter(p => p.ten.toLowerCase().includes(key) || p.dvNam.toLowerCase().includes(key) || p.dvNu.toLowerCase().includes(key)));
}

function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const ten = params.get('ten');
    const search = params.get('search');

    // 1. TRANG CHI TIẾT PHIM
    if (id) {
        const p = dsPhim.find(i => i.id === id);
        if (p) {
            if(document.getElementById("ten-phim")) document.getElementById("ten-phim").innerText = p.ten;
            if(document.getElementById("poster-phim")) document.getElementById("poster-phim").src = p.anhPhim;
            if(document.getElementById("dao-dien")) document.getElementById("dao-dien").innerText = p.daoDien;
            if(document.getElementById("ngay-ra-mat")) document.getElementById("ngay-ra-mat").innerText = p.ngay;
            if(document.getElementById("so-tap")) document.getElementById("so-tap").innerText = p.tap;
            if(document.getElementById("danh-gia-phim")) document.getElementById("danh-gia-phim").innerText = p.danhGia;
            if(document.getElementById("star-rating")) document.getElementById("star-rating").innerText = veSao(p.diem || 9);
            
            // XỬ LÝ MÔ TẢ
            fullMoTa = p.moTa;
            const moTaEle = document.getElementById("mo-ta");
            const btn = document.getElementById("btn-xem-them");
            if (fullMoTa.length > 120) { 
                moTaEle.innerText = fullMoTa.substring(0, 120) + "..."; 
                if(btn) { btn.innerText = "Xem thêm"; btn.style.display = "inline"; }
            } else { 
                moTaEle.innerText = fullMoTa; 
                if(btn) btn.style.display = "none"; 
            }
            const dVN = dsDienVien.find(d => d.ten === p.dvNam) || { ten: p.dvNam, anh: "placeholder.jpg" };
            const dVU = dsDienVien.find(d => d.ten === p.dvNu) || { ten: p.dvNu, anh: "placeholder.jpg" };
            const actorList = document.getElementById("actor-list");
            if(actorList) actorList.innerHTML = `
                <div class="actor-card" onclick="location.href='dienvien.html?ten=${encodeURIComponent(dVN.ten)}'"><img src="${dVN.anh}"><p><strong>${dVN.ten}</strong></p></div>
                <div class="actor-card" onclick="location.href='dienvien.html?ten=${encodeURIComponent(dVU.ten)}'"><img src="${dVU.anh}"><p><strong>${dVU.ten}</strong></p></div>`;
            const trailerKhung = document.getElementById("phim-trailer");
            if (trailerKhung) { 
                trailerKhung.src = p.trailer || ""; 
            }
        }
    }
    if (ten) {
        const d = dsDienVien.find(i => i.ten === ten);
        if (d) { 
            if(document.getElementById("actor-name")) document.getElementById("actor-name").innerText = d.ten; 
            if(document.getElementById("actor-img")) document.getElementById("actor-img").src = d.anh; 
            if(document.getElementById("actor-dob")) document.getElementById("actor-dob").innerText = d.dob; 
            if(document.getElementById("actor-height")) document.getElementById("actor-height").innerText = d.cao; 
            if(document.getElementById("actor-bio")) document.getElementById("actor-bio").innerText = d.bio; 
        }
    }

    // 3. LỌC TÌM KIẾM
    if (search) hienThiTrangChu(dsPhim.filter(p => p.theLoai === decodeURIComponent(search)));
    else if (!id && !ten) hienThiTrangChu();
}

function toggleMoTa() {
    const moTaEle = document.getElementById("mo-ta");
    const btn = document.getElementById("btn-xem-them");
    if (btn.innerText === "Xem thêm") { moTaEle.innerText = fullMoTa; btn.innerText = "Thu gọn"; }
    else { moTaEle.innerText = fullMoTa.substring(0, 120) + "..."; btn.innerText = "Xem thêm"; }
}

window.onload = () => { taoMenu(); loadData(); };
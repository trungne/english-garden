import CommuncativeCourse from "./CommunicativeCourse";
import seedImg from "./static/seed.jpg"
import leafImg from "./static/leaf.jpg"
import flowerImg from "./static/flower.jpg"
import fruitImg from "./static/fruit.jpg"

import seedOverviewImg from "./static/overview/seed.png"
import leafOverviewImg from "./static/overview/leaf.png"
import flowerOverviewImg from "./static/overview/flower.png"
import fruitOverviewImg from "./static/overview/fruit.png"

import seedPreview1 from './static/seed_preview1.jpg';
import seedPreview2 from './static/seed_preview2.jpg';
import seedPreview3 from './static/seed_preview3.jpg';

const courses: { [key: string]: CommuncativeCourse } = {
    seed: {
        name: "Seed",
        photoUrl: seedImg,
        description: "Hạt (Seed) là khóa học dành cho học viên vừa bắt đầu hành trình trồng cây. Tại Hạt, các bạn sẽ được giới thiệu và bồi đắp gốc rễ của tiếng Anh cũng như được thực hành với những tình huống giao tiếp thông dụng.",
        duration: 120,
        level: "A1-A2",
        previews: [
            {
                url: seedPreview1,
                description: "",
                fallback: "",
            },
            {
                url: seedPreview2,
                description: "",
                fallback: "",
            },
            {
                url: seedPreview3,
                description: "",
                fallback: "",
            }
        ],
        outcomes: ["Giới thiệu bản thân và nói về sở thích",
            "Hiểu và sử dụng những cụm từ thông dụng và cơ bản",
            "Làm quen với những tình huống giao tiếp thông dụng",
            "Sử dụng các thì cơ bản ở quá khứ, hiện tại, tương lai",
            "Áp dụng tư duy phản biện",
            "Sử dụng các từ nối cơ bản để nói và viết mạch lạc hơn",
            "Phát âm cơ bản",
            "Nhận biết các âm tiết dễ nhầm lẫn",
            "Viết đoạn văn ngắn mô tả đồ vật và người",
            "Áp dụng văn phong KISS (Keep It Short & Simple)"],
        overviewPhotoUrl: seedOverviewImg,
    },
    leaf: {
        name: "Leaf",
        photoUrl: leafImg,
        description: "Lá (Leaf) là điểm khởi đầu trong hành trình khá tiếng Anh của bạn. Tại Lá, bạn sẽ được củng cố cũng như bổ sung nền tảng văn phạm và ngữ pháp. Đồng thời, bạn sẽ được thực hành đa dạng tình huống giao tiếp thực tế để cải thiện sự tự tin.",
        duration: 120,
        level: "B1",
        previews: [],
        outcomes: ["Giới thiệu chi tiết lý lịch bản thân",
            "Giao tiếp hiệu quả trong cuộc sống thường ngày và công việc. Có thể sử dụng Tiếng Anh khi du lịch",
            "Phân biệt sự khác nhau giữa những thì trong cùng một thời gian (vd: quá khứ đơn và quá khứ tiếp diễn)",
            "Áp dụng tư duy phản biện",
            "So sánh các lựa chọn và đưa ra kết luận",
            "Phân biệt các từ chỉ số lượng (many/much)",
            "Sử dụng mạo từ (a/an/the) chính xác",
            "Đưa ra dự đoán trong tương lai",
            "Sử dụng mệnh đề quan hệ",
            "Sử dụng câu điều kiện dạng I, II",
            "Sử dụng thể bị động",
            "Sử dụng used to để chỉ thói quen trong quá khứ",
            "Sử dụng câu tường thuật",
            "Nhấn câu nhằm thể hiện cảm xúc",
            "Phát âm đuôi rõ",
            "Cải thiện ngữ điệu",
        ],
        overviewPhotoUrl: leafOverviewImg,
    },
    flower: {
        name: "Flower",
        photoUrl: flowerImg,
        description: "Hoa (Flower) là lớp học dành cho những ai đã vững căn bản. Đừng để cái tên đánh lừa, tại Hoa bạn sẽ được tiếp xúc tiếng Anh ở một cường độ cao hơn cùng những chủ đề hóc búa. Với những buổi tranh luận về những đề tài “hot”, Hoa là nơi thích hợp để phát triển sự lưu loát và mạch lạc trong ngôn ngữ.",
        duration: 120,
        level: "B2",
        previews: [],
        outcomes: ["Nắm được ý chính của đoạn hội thoại nhanh và chính xác. Đồng thời có thể thảo luận chuyên sâu về đa dạng chủ đề",
            "Có thể giao tiếp tương đối lưu loát và phản xạ nhanh",
            "Giao tiếp với người bản ngữ tự tin và diễn đạt ý hiệu quả",
            "Mạch lạc trong lời nói và chữ viết",
            "Diễn đạt trải nghiệm, ước mơ, hy vọng (quá khứ, hiện tại, tương lai) trôi chảy cùng với khả năng giải thích và mở rộng ý",
            "Phân biệt sự khác nhau giữa các thì quá khứ, hiện tại, tương lai. Sử dụng thì hợp lý",
            "Đa dạng hóa từ vựng ở những chủ đề chuyên ngành",
            "Thực hành kể chuyện",
            "Phát âm mạnh và nhẹ chính xác",
            "Nối âm",
            "Thể hiện cảm xúc bằng cách nhấn âm",
            "Sử dụng câu điều kiện loại I, II, III",
            "Sử dụng modal verbs cho đa dạng mục đích",
            "Sử dụng câu tường thuật và câu trực tiếp",
            "Cải thiện tư duy phản biện",
            "Viết tiểu luận xã hội",
            "Sử dụng mệnh đề quan hệ hiệu quả trong giao tiếp",
            "Sử dụng tiền tố và hậu tố nhằm học từ vựng hiệu quả"],
        overviewPhotoUrl: flowerOverviewImg,
    },
    fruit: {
        name: "Fruit",
        photoUrl: fruitImg,
        description: "Trái (Fruit) là cấp bậc cuối cùng trong hệ thống Tiếng Anh giao tiếp. Tại Trái, mục tiêu duy nhất là sử dụng ngôn ngữ linh hoạt và dễ dàng nhằm mục đích giao tiếp hằng ngày hoặc học thuật. Sự tự nhiên và hiểu sâu về từ vựng/ngữ pháp sẽ được chú trọng tại đây. Mặc dù Trái là cấp bậc cuối cùng trong hệ thống, đây chỉ là mới là sự khởi đầu của bạn. Bọn mình tin rằng sau Trái, bạn đã đủ khả năng để tự đi trên con đường tự học Tiếng Anh.",
        duration: 120,
        level: "C1",
        previews: [],
        outcomes: ["Nghe và đọc tốt. Có khả năng hiểu được ngụ ý và các ý ẩn dụ",
            "Nói lưu loát và phản xạ tự nhiên",
            "Phát âm rõ chữ. Sử dụng ngữ điệu để truyền tải cảm xúc",
            "Sử dụng ngôn ngữ linh hoạt cho mục đích giao tiếp và học thuật",
            "Sắp xếp câu chữ rõ ràng, mạch lạc. Có thể giao tiếp, viết về những chủ đề phức tạp",
            "Sử dụng từ nối hiệu quả",
            "Sử dụng cụm từ, idioms tự nhiên",
        ],
        overviewPhotoUrl: fruitOverviewImg,
    }
}

export default courses;
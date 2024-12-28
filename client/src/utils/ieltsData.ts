export const ieltsTopics = [
  "Environment",
  "Education",
  "Technology",
  "Health",
  "Work",
] as const;

export const ieltsBands = [5, 6, 7, 8, 9];

export const translationTypes = ["sentence", "paragraph"];

export const ieltsSentences = {
  Environment: [
    {
      english: "Climate change is one of the most pressing issues of our time.",
      vietnamese: "Biến đổi khí hậu là một trong những vấn đề cấp bách nhất của thời đại chúng ta.",
      band: 6,
      type: "sentence",
    },
    {
      english: "Renewable energy sources are becoming increasingly important.",
      vietnamese: "Các nguồn năng lượng tái tạo đang trở nên ngày càng quan trọng.",
      band: 6,
      type: "sentence",
    },
  ],
  Education: [
    {
      english: "Online learning has transformed the educational landscape.",
      vietnamese: "Học trực tuyến đã làm thay đổi bối cảnh giáo dục.",
      band: 6,
      type: "sentence",
    },
    {
      english: "Critical thinking skills are essential in modern education.",
      vietnamese: "Kỹ năng tư duy phản biện là thiết yếu trong giáo dục hiện đại.",
      band: 7,
      type: "sentence",
    },
  ],
  Technology: [
    {
      english: "Artificial intelligence is revolutionizing various industries.",
      vietnamese: "Trí tuệ nhân tạo đang cách mạng hóa nhiều ngành công nghiệp.",
      band: 7,
      type: "sentence",
    },
    {
      english: "The Internet of Things has connected our world like never before.",
      vietnamese: "Internet vạn vật đã kết nối thế giới của chúng ta như chưa từng có.",
      band: 8,
      type: "sentence",
    },
  ],
  Health: [
    {
      english: "Regular exercise is crucial for maintaining good health.",
      vietnamese: "Tập thể dục thường xuyên rất quan trọng để duy trì sức khỏe tốt.",
      band: 6,
      type: "sentence",
    },
    {
      english: "Mental health awareness has increased significantly in recent years.",
      vietnamese: "Nhận thức về sức khỏe tâm thần đã tăng lên đáng kể trong những năm gần đây.",
      band: 7,
      type: "sentence",
    },
  ],
  Work: [
    {
      english: "Remote work has become more common in many industries.",
      vietnamese: "Làm việc từ xa đã trở nên phổ biến hơn trong nhiều ngành công nghiệp.",
      band: 6,
      type: "sentence",
    },
    {
      english: "Work-life balance is an important factor in job satisfaction.",
      vietnamese: "Cân bằng công việc-cuộc sống là một yếu tố quan trọng trong sự hài lòng với công việc.",
      band: 7,
      type: "sentence",
    },
  ],
};

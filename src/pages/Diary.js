import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams(); // 커스텀 hooks
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 목록페이지 입니다.</p>
    </div>
  );
};

export default Diary;

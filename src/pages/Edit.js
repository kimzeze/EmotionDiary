import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams(); //Query String

  const id = searchParams.get("id"); //Query String , get을 통해서 꺼내서 쓸 수 있다.
  console.log("id: ", id);

  const mode = searchParams.get("mode"); //Query String , get을 통해서 꺼내서 쓸 수 있다.
  console.log("mode: ", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "dohyeonkim" })}>
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;

const 마을정보가져오기 = async () => {
  const res = await fetch("http://127.0.0.1:3000/town");
  return res.json();
};

const dfs = (시작점, 클래스) => {
  const 자식노드들 = [...시작점.children];
  const 찾은노드 = 자식노드들.find((자식노드) =>
    자식노드.classList.contains(클래스)
  );
  if (찾은노드) {
    return 찾은노드;
  } else {
    return 자식노드들.map((자식노드) => dfs(자식노드, 클래스)).find((v) => v);
  }
};

const 클래스로요소찾기 = (클래스) => {
  return dfs(document.body, 클래스);
};

const 딜레이 = (밀리초) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 밀리초);
  });
};

export { 마을정보가져오기, 클래스로요소찾기, 딜레이, dfs };
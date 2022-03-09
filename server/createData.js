const {
  마을개수랜덤생성,
  크기랜덤생성,
  우체통존재여부랜덤생성,
  좌표랜덤생성,
} = require("./utils.js");

const 시작가로길이 = 700;
const 시작세로길이 = 800;
const 우체통최대크기 = 10;
const 마을최소길이 = 100;

const 사분면생성 = ({ 기준가로길이, 기준세로길이 }) => {
  return [
    [0, 0],
    [기준가로길이 / 2, 0],
    [0, 기준세로길이 / 2],
    [기준가로길이 / 2, 기준세로길이 / 2],
  ];
};

const 마을생성 = ({ 기준가로길이, 기준세로길이, 기준사분면 }) => {
  if (기준가로길이 < 마을최소길이 || 기준세로길이 < 마을최소길이) return;

  return Array(마을개수랜덤생성())
    .fill(0)
    .map((_, i) => {
      const [x, y] = 기준사분면[i];
      const 베이스좌표 = { x, y };
      const 가로길이 = 크기랜덤생성({
        우체통인가: false,
        최대크기: 기준가로길이,
        나눌수: 기준사분면.length,
      });
      const 세로길이 = 크기랜덤생성({
        우체통인가: false,
        최대크기: 기준세로길이,
        나눌수: 기준사분면.length,
      });
      const 상대좌표 = 좌표랜덤생성({
        베이스좌표,
        가로길이,
        세로길이,
        시작가로길이: 기준가로길이,
        시작세로길이: 기준세로길이,
      });
      const 우체통존재여부 = 우체통존재여부랜덤생성();
      const 우체통크기 = 크기랜덤생성({
        우체통인가: true,
        최대크기: 우체통최대크기,
      });
      const 자식사분면 = 사분면생성({
        기준가로길이: 가로길이,
        기준세로길이: 세로길이,
      });
      const 자식마을 = 마을생성({
        기준가로길이: 가로길이,
        기준세로길이: 세로길이,
        기준사분면: 자식사분면,
      });

      return {
        가로길이,
        세로길이,
        우체통존재여부,
        상대좌표,
        우체통크기,
        자식마을,
      };
    });
};

const 데이터얻기 = () => {
  const 사분면 = 사분면생성({
    기준가로길이: 시작가로길이,
    기준세로길이: 시작세로길이,
  });
  const results = 마을생성({
    기준가로길이: 시작가로길이,
    기준세로길이: 시작세로길이,
    기준사분면: 사분면,
  });
  return { results };
};

module.exports = { 데이터얻기 };

import { useState } from 'react';
import Layout from '../layout/main';
type AccordionProps = {
  items: { title: string, content: string, degree: string }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  items = [
    { title: "aa", content: "テストテストテストテストテストテスト", degree: "123" },
    { title: "aa", content: "dadad", degree: "123" }
  ]
  const onTitleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={item.title}>
        <div onClick={() => onTitleClick(index)}>
          {item.title} - {item.degree}
        </div>
        {active && <p>{item.content}</p>}

      </div>
    );
  });

  return <Layout>{renderedItems} <BitChalenge/></Layout>;
};

function decimalToBinary(decimal: number): string {
  return decimal.toString(2);
}

// 2進数を10進数に変換する関数
function binaryToDecimal(binary: string): number {
  return parseInt(binary, 2);
}
const BitChalenge = () => {
  const decimalNumber = 9999;
  const binaryNumber = decimalToBinary(decimalNumber);
  const tenNumber = binaryToDecimal(binaryNumber);
  return (
    <>
      2進数
      {binaryNumber}
      {tenNumber}
    </>
  )
}

export default Accordion;

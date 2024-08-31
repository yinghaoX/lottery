'use client';
import { useEffect, useRef, useState } from "react";
import { Button, Card } from 'antd';

export default function Home() {
  const [num, setNum] = useState(0);
  const timer = useRef<any>();
  const students = [
    {
      id: 1,
      name: '张三'
    },
    {
      id: 2,
      name: '李四'
    },
    {
      id: 3,
      name: '王五'
    },
    {
      id: 4,
      name: '赵六'
    },
    {
      id: 5,
      name: '孙七'
    },
    {
      id: 6,
      name: '周八'
    },
    {
      id: 7,
      name: '吴九'
    },
    {
      id: 8,
      name: '郑十'
    },
  ]

  const genRandomNum = () => {
    // 生成1-100的随机数
    return Math.floor(Math.random() * students.length);
  }

  useEffect(() => {
    console.log(genRandomNum());
  }, []);

  const onStart = () => {
    timer.current = setInterval(() => {
      const newNum = genRandomNum();
      setNum(newNum);
      console.log(newNum);
    }, 100);
  }

  const onPause = () => {
    timer.current && clearInterval(timer.current);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card title="随机抽人">
        <div className="text-4xl text-center">{`${students[num].id} - ${students[num].name}`}</div>
        <div className="flex justify-between items-center space-x-4 mt-5">
        <Button type="primary" onClick={onStart}>开始</Button>
        <Button type="primary" onClick={onPause}>暂停</Button>
        </div>
      </Card>
    </main>
  );
}
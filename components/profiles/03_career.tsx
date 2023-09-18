"use client"

import { useState } from "react"

const Career = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen((prev) => {
      return !prev
    })
  }
  return (
    <>
      <div className="flex flex-row space-x-2 items-center mb-2">
        {isOpen ? <span>📖</span> : <span>📗</span>}
        <h1
          className="text-4xl font-bold hover:cursor-pointer"
          onClick={onClickHandler}
        >
          나의 커리어
        </h1>
      </div>
      {isOpen ? (
        <>
          <h1 className="text-2xl font-bold">학력사항</h1>
          <ul className="list-disc px-6">
            <li>2006.03 ~ 2013.08, 부산대학교</li>
            <ul className="list-disc px-6">
              <li>경제학 전공, 국제무역학 부전공</li>
              <li>학점 3.2/4.5</li>
            </ul>
            <li>2003.03 ~ 2006.02, 경원 고등학교</li>
          </ul>
          <hr className="m-1" />
          <h1 className="text-2xl font-bold">경력사항</h1>
          <ul className="list-disc px-6">
            <li>2021.10 ~ 현재, 옵타움플랫폼, PG 서비스 회사</li>
            <li>2021.07 ~ 2021.09, 앤디소프트</li>
            <li>2016.12 ~ 2021.02, 이멕스, 물류 서비스 회사</li>
          </ul>
        </>
      ) : null}
    </>
  )
}

export default Career

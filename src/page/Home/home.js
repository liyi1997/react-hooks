import React, { useState, useEffect } from 'react'
const One = () => {
  const [count, setCount] = useState(21)
  const [city, setCity] = useState(['cd', 'cq', 'wh'])
  const [obj, setObj] = useState({ name: 'l', city: '上海' })
  useEffect(() => {
    console.log('didmount')
  }, [1])

  const click = () => {
    console.log(city)
    const arr = ['1', '2', '3']
    arr.forEach(element => {
      city.push(element)
    })
    setCity([...city])
  }
  const clickObj = () => {
    obj.city = '成都'
    setObj({ ...obj })
  }
  return (
    <div>
      <div>{count}</div>
      <div>{city}</div>
      <div>{obj.city}</div>
      {city.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => click()}>Click me city</button>
      <button onClick={() => clickObj()}>Click me obj</button>
    </div>
  )
}
export default One

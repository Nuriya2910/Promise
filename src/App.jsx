import { useState } from "react"
import Card from "./Card"
import "./App.css"
function App() {
  let [data, setData] = useState([])
  const getAll = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
  }
  const get_10 = () => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(json => setData(json))
  }
  const sort = () => {
    fetch('https://fakestoreapi.com/products?sort=desc')
      .then(res => res.json())
      .then(json => setData(json))
  }

  const get1 = () => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get2 = () => {
    fetch('https://fakestoreapi.com/products/2')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get3 = () => {
    fetch('https://fakestoreapi.com/products/3')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get4 = () => {
    fetch('https://fakestoreapi.com/products/4')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get5 = () => {
    fetch('https://fakestoreapi.com/products/5')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get6 = () => {
    fetch('https://fakestoreapi.com/products/6')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get7 = () => {
    fetch('https://fakestoreapi.com/products/7')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get8 = () => {
    fetch('https://fakestoreapi.com/products/8')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get9 = () => {
    fetch('https://fakestoreapi.com/products/9')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get10 = () => {
    fetch('https://fakestoreapi.com/products/10')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get11 = () => {
    fetch('https://fakestoreapi.com/products/11')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get12 = () => {
    fetch('https://fakestoreapi.com/products/12')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get13 = () => {
    fetch('https://fakestoreapi.com/products/13')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get14 = () => {
    fetch('https://fakestoreapi.com/products/14')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get15 = () => {
    fetch('https://fakestoreapi.com/products/15')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get16 = () => {
    fetch('https://fakestoreapi.com/products/16')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get17 = () => {
    fetch('https://fakestoreapi.com/products/17')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get18 = () => {
    fetch('https://fakestoreapi.com/products/18')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get19 = () => {
    fetch('https://fakestoreapi.com/products/19')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const get20 = () => {
    fetch('https://fakestoreapi.com/products/20')
      .then(res => res.json())
      .then(json => setData([json]))
  }
  const specificCategory = () => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(res => res.json())
      .then(json => setData(json))
  }
  const electronics = () => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(res => res.json())
      .then(json => setData(json))
  }
  const mensClothing = () => {
    fetch('https://fakestoreapi.com/products/category/men\'s clothing')
      .then(res => res.json())
      .then(json => setData(json))
  }
  const womensClothing = () => {
    fetch('https://fakestoreapi.com/products/category/women\'s clothing')
      .then(res => res.json())
      .then(json => setData(json))
  }

  return (
    <>
      <div className="d-flex flex-wrap gap-3">
        <button onClick={getAll} className="btn btn-primary mx-3">All </button>
        <button onClick={get_10} className="btn btn-primary mx-3">Get 10 </button>
        <button onClick={sort} className="btn btn-primary mx-3">Sort </button>
        <button onClick={specificCategory} className="btn btn-primary mx-3">Jewelery</button>
        <button onClick={electronics} className="btn btn-primary mx-3">Electronics</button>
        <button onClick={mensClothing} className="btn btn-primary mx-3">Men's Clothing</button>
        <button onClick={womensClothing} className="btn btn-primary mx-3">Women's Clothing</button>
        <button onClick={get1} className="btn btn-primary mx-3">Get 1 </button>
        <button onClick={get2} className="btn btn-primary mx-3">Get 2 </button>
        <button onClick={get3} className="btn btn-primary mx-3">Get 3 </button>
        <button onClick={get4} className="btn btn-primary mx-3">Get 4 </button>
        <button onClick={get5} className="btn btn-primary mx-3">Get 5 </button>
        <button onClick={get6} className="btn btn-primary mx-3">Get 6 </button>
        <button onClick={get7} className="btn btn-primary mx-3">Get 7 </button>
        <button onClick={get8} className="btn btn-primary mx-3">Get 8 </button>
        <button onClick={get9} className="btn btn-primary mx-3">Get 9 </button>
        <button onClick={get10} className="btn btn-primary mx-3">Get 10 </button>
        <button onClick={get11} className="btn btn-primary mx-3">Get 11</button>
        <button onClick={get12} className="btn btn-primary mx-3">Get 12</button>
        <button onClick={get13} className="btn btn-primary mx-3">Get 13</button>
        <button onClick={get14} className="btn btn-primary mx-3">Get 14</button>
        <button onClick={get15} className="btn btn-primary mx-3">Get 15</button>
        <button onClick={get16} className="btn btn-primary mx-3">Get 16</button>
        <button onClick={get17} className="btn btn-primary mx-3">Get 17</button>
        <button onClick={get18} className="btn btn-primary mx-3">Get 18</button>
        <button onClick={get19} className="btn btn-primary mx-3">Get 19</button>
        <button onClick={get20} className="btn btn-primary mx-3">Get 20</button>

      </div>
      <div className="mt-5 row gap-5 justify-content-between">
        {data.map((item, i) => {
          return (
            <Card key={i} data={item} />
          )
        })}


      </div>


    </>
  )
}

export default App

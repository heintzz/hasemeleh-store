import { Link } from 'react-router-dom'

export default function ProductItems({ addToCart, items, keyword }) {
    return (
        <div className="flex flex-wrap mt-5">
            {keyword
                ? items
                      .filter((item) =>
                          item.title
                              .toLowerCase()
                              .includes(keyword.toLowerCase())
                      )
                      .map((item) => {
                          const { img, title, price, type, id} = item
                          return (
                              <div
                                  key={id}
                                  className="flex flex-col w-4/12 p-6 text-sm hover:scale-110 transition duration-700"
                              >
                                  <Link to={`/about/${id}`}>
                                      <img
                                          className="bg-slate-300 rounded-3xl mb-3 w-full"
                                          src={img}
                                          alt={title}
                                      />
                                  </Link>
                                  <div className="mb-2 px-2">
                                      <h3>{title}</h3>
                                      <h4 className="text-xs">{type}</h4>
                                  </div>
                                  <div className="flex justify-between items-center px-2">
                                      <p>{`$ ${price}`}</p>
                                      <button onClick={() => addToCart(id)}>
                                          <img src="./icons/bag-add.svg" />
                                      </button>
                                  </div>
                              </div>
                          )
                      })
                : items.map((item) => {
                      const { img, title, price, type, id } = item
                      return (
                          <div
                              key={id}
                              className="flex flex-col w-4/12 p-6 text-sm hover:scale-110 transition duration-700"
                          >
                              <Link to={`/about/${id}`}>
                                  <img
                                      className="bg-slate-300 rounded-3xl mb-3 w-full"
                                      src={img}
                                      alt={title}
                                  />
                              </Link>
                              <div className="mb-2 px-2">
                                  <h3>{title}</h3>
                                  <h4 className="text-xs">{type}</h4>
                              </div>
                              <div className="flex justify-between items-center px-2">
                                  <p>{`$ ${price} `}</p>
                                  <button onClick={() => addToCart(id)}>
                                      <img src="./icons/bag-add.svg" />
                                  </button>
                              </div>
                          </div>
                      )
                  })}
        </div>
    )
}

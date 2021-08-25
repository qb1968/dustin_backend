import React, { useState, useEffect, useMemo } from "react";
import Card from "./Card";
import { getCategories, list } from "./apiCore";
import throttle from 'lodash.throttle'
import { Form, Button } from "react-bootstrap";

// const Search = ({ history }) => {
//   const [keyword, setKeyword] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (keyword.trim()) {
//       history.push(`/search/${keyword}`);
//     } else {
//       history.push("/");
//     }
//   };

//   return (
//     <Form onSubmit={submitHandler} inline>
//       <Form.Control
//         type="text"
//         name="q"
//         onChange={(e) => setKeyword(e.target.value)}
//         placeholder="Search Products..."
//         className="mr-sm-2 ml-sm-5"
//       ></Form.Control>
//       <Button type="submit" variant="outline-success" className="p-2">
//         Search
//       </Button>
//     </Form>
//   );
// };

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories().then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        setData({ ...data, categories: res });
      }
    });
  };

  const searchdata = () => {
    if (search || category) {
      list({
        search: search || undefined,
        category: ["60e5a122a15ee5492460861b"],
      }).then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          setData({ ...data, results: res, searched: true });
        }
      });
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();

    searchdata();
  };

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };
  const debouncedChangeHandler = useMemo(
    () => throttle(handleChange, 100),
    []
  );

  const searchMessage = (searched, products) => {
    let prodsQty = products.length || 0;
    let message = "";

    if (searched) {
      if (prodsQty > 0) {
        message = `Found ${prodsQty} products`;
      } else {
        message = "No products found";
      }
    }

    return message;
  };

  const searchedProducts = (results = []) => {
    return (
      <div className="container-fluid">
        <h2 className="mt-5 bm-5">{searchMessage(searched, results)}</h2>
        <div  className="row">
          {results.map((p, i) => (
            <div key={i} className="col-sm-4">
              <Card key={i} product={p} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const searchForm = () => {
    return (
      <Form onSubmit={searchSubmit}>
        <span className="input-group-text">
          <div className="input-group input-group-lg">
            {/* <div className="input-group-prepend">
              <select className="btn mr-1" onChange={handleChange("category")}>
                <option value="All">All</option>
                {categories.map((c, i) => (
                  <option key={i} value={c._id}>
                    {c.name.substr(0, 20)}
                  </option>
                ))}
              </select>
            </div> */}
            <Form.Control
              type="search"
              className="form-control"
              onChange={debouncedChangeHandler("search")}
              placeholder="Search by name"
              
            ></Form.Control>
          </div>
          <div className="btn input-group-append" style={{ border: "none" }}>
            <Button  className="input-group-text">Search</Button>
          </div>
        </span>
      </Form>
    );
  };

  return (
    <div className="row">
      <div className="container-fluid mb-4">{searchForm()}</div>
      <div className="container-fluid ">{searchedProducts(results)}</div>
    </div>
  );
};

export default Search;

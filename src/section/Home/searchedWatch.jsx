import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { Card, Row, Col, Button, Dropdown, Menu, Space, Checkbox } from "antd";
import useWatch from "../../hooks/useWatch";
import { Link, useParams } from "react-router-dom";
import { DownOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { ErrorWatch } from "../../component";

const { Meta } = Card;

function SearchWatch() {
  const { searchValue } = useParams();
  const { searchWatchList, fetchWatchByName, status } = useWatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchWatchByName(searchValue);
  }, [searchValue]);

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchWatchList.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  const formatPrice = (price) => {
    const decimalPart = price - Math.floor(price);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: decimalPart > 0 ? 2 : 0,
    }).format(price);
  };

  return (
    <div>
      <div className="bg-white py-4 justify-center items-center shadow-lg h-16 w-[99%] rounded-md">
        <div className="float-left font-[14px] mt-1 ml-4 ">
          KẾT QUẢ TÌM KIẾM: {searchValue}
        </div>
      </div>
      <div className="mt-8">
        {status === 404 ? (
          <div className="flex justify-center mt-8 mb-8">
            <ErrorWatch className="flex justify-center mx-56" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentItems.map((watch) => (
                <div
                  key={watch._id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="h-65 flex items-center justify-center bg-gray-100">
                    <img
                      alt={watch.watchName}
                      src={watch.image}
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex ">
                      <h2 className="text-lg font-bold">{watch.watchName}</h2>
                      <span className="mx-4 my-1">
                        <Link to={`/watch/${watch._id}`}>
                          <ExclamationCircleOutlined />
                        </Link>
                      </span>
                    </div>
                    <h2 className="text-red-500 font-bold">
                      {formatPrice(watch.price)}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Pagination
                current={currentPage}
                onChange={handleChange}
                total={searchWatchList.length}
                pageSize={itemsPerPage}
                showSizeChanger={false}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchWatch;

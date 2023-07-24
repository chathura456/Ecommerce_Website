import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../../components/Category/Category';
import ProductList from '../../components/ProductList/ProductList';
import SingleCategory from '../../components/SingleCategory/SingleCategory';
import Slider from '../../components/Slider/Slider';
import { fetchCategories, fetchProductsByCategory } from '../../store/categorySlice';
import { fetchProducts } from '../../store/productSlice';
import "./HomePage.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
  const {data: products, status: productStatus} = useSelector((state) => state.product);
  const {catProductAll: productsByCategory, catProductAllStatus} = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory('furniture', 'all'));
    dispatch(fetchProductsByCategory('mobile', 'all'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className = "home-page">
      <Slider />
      <Category categories = {categories} status = {categoryStatus} />
      <ProductList products = {products} status = {productStatus} />
      <section>
        { productsByCategory['furniture'] && <SingleCategory products = {productsByCategory['furniture']} status = {catProductAllStatus} /> }
      </section>
      <section>
        { productsByCategory['mobile'] && <SingleCategory products = {productsByCategory['mobile']} status = {catProductAllStatus} /> }
      </section>
    </div>
  )
}

export default HomePage;
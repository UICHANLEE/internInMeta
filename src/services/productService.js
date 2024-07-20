const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', image: 'image2.jpg' },
    { id: 3, name: 'Product 3', price: '$30', image: 'image3.jpg' },
    // 더 많은 상품 데이터
  ];
  
  const getProducts = async () => {
    // 여기서 실제 API 호출을 수행할 수 있습니다.
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  }
  
  export default { getProducts };
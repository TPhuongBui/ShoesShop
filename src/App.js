import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import HomeComponent from './Components/BaiTapComponent/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleComponent from './StylingComponent/StyleComponent';
import DemoLogin from './DemoState/DemoLogin';
import TangGiamFont from './DemoState/TangGiamFont';
import ProductList from './BTShoesShop/ProductList';
import BTXemChiTiet from './BTXemChiTiet/BTXemChiTiet';
import BTShoesStore from './BTShoesShop/BTShoesStore';
import BTGioHang from './BTGioHang/BTGioHang';
import BTTangGiamSo from './DemoRedux/BTTangGiamSo';


// app chứa các component con
function App() {
  return (
    <>
      <BTTangGiamSo/>
      {/* <BTGioHang/> */}
      {/* <BTXemChiTiet/> */}
      {/* <BTShoesStore/> */}
      {/* <ProductList/> */}

      {/* <TangGiamFont/> */}
      {/* <DemoLogin/> */}
      {/* <StyleComponent/> */}

      {/* <HandleEvent /> */}


      {/* <DataBinding/> */}


      {/* <HomeComponent/> */}

      {/* <FunctionComponent/>
      <ClassComponent/>    */}

    </>
  );
}

export default App;

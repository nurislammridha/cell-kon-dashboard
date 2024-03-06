import { combineReducers } from "redux";
import AuthReducer from "src/modules/auth/_redux/AuthReducer";
import BrandReducer from "src/modules/brand/_redux/BrandReducer";
import CategoryReducer from "src/modules/category/_redux/CategoryReducer";
import ColorReducer from "src/modules/color/_redux/ColorReducer";
import OrderReducer from "src/modules/order/_redux/OrderReducer";
import ProductReducer from "src/modules/product/_redux/ProductReducer";
import SizeReducer from "src/modules/size/_redux/SizeReducer";
import UnitReducer from "src/modules/unit/_redux/UnitReducer";
import UserReducer from "src/modules/user/_redux/UserReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  authInfo: AuthReducer,
  brandInfo: BrandReducer,
  unitInfo: UnitReducer,
  sizeInfo: SizeReducer,
  colorInfo: ColorReducer,
  categoryInfo: CategoryReducer,
  productInfo: ProductReducer,
  userInfo: UserReducer,
  orderInfo: OrderReducer,
});

export default rootReducer;

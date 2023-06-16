import { getCategories } from '@/services';
import { IcRoundShoppingCart } from '../icons/cart';
import { SolarBagHeartBold } from '../icons/favorite';
import { IonLogOut } from '../icons/logout';
import { MaterialSymbolsSearch } from '../icons/magnify';
import { IcBaselinePayments } from '../icons/payment';
import { MaterialSymbolsPerson } from '../icons/user';
import CategoryDropdown from './category-dropdown';
import Logo from './logo';

export default async function Header() {
  const response = await getCategories();
  const { data: categories } = response;

  return (
    <header className="container-1200 mx-auto">
      <nav className="navbar navbar-no-boxShadow h-[8rem] py-6 z-[100]">
        <div className="navbar-start">
          <Logo />
        </div>
        <div className="navbar-center">
          {categories && <CategoryDropdown categories={categories} />}
          <div className="navbar-item flex border-[2px] border-rose-500 items-center rounded-xl">
            <input
              type="text"
              className="w-[35rem]"
              placeholder="Tìm kiếm sản phẩm..."
            />
            <MaterialSymbolsSearch />
          </div>
        </div>
        <div className="navbar-end space-x-6">
          <button>
            <IcRoundShoppingCart className="text-4xl" />
          </button>
          <div className="avatar avatar-xl text-2xl">
            <div className="dropdown-container">
              <div className="dropdown">
                <label
                  className="btn btn-ghost h-[3.5rem] w-[3.5rem] flex cursor-pointer px-0"
                  tabIndex={0}
                >
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="avatar avatar-xl"
                  />
                </label>
                <div className="dropdown-menu dropdown-menu-bottom-left">
                  <a className="dropdown-item">
                    <div className="flex space-x-4 items-center p-2">
                      <MaterialSymbolsPerson />
                      <span>Tài khoản</span>
                    </div>
                  </a>
                  <a tabIndex={-1} className="dropdown-item">
                    <div className="flex space-x-4 items-center p-2">
                      <SolarBagHeartBold />
                      <span>Yêu thích</span>
                    </div>
                  </a>
                  <a tabIndex={-1} className="dropdown-item">
                    <div className="flex space-x-4 items-center p-2">
                      <IcBaselinePayments />
                      <span>Đã mua</span>
                    </div>
                  </a>
                  <a tabIndex={-1} className="dropdown-item">
                    <div className="flex space-x-4 items-center p-2">
                      <IonLogOut />
                      <span>Đăng xuất</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

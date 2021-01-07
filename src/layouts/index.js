/**
 * @author: 94
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Menu } from 'antd';
import router from 'umi/router';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const BasicLayout = (props) => {
  const [selectedMenu, setSelectedMenu] = useState(''); // 选中的菜单 key
  const [selectedSubMenu, setSelectedSubMenu] = useState(''); // 展开/关闭的子菜单 key
  const { dispatch, Global } = props;
  const { menu = {} } = Global;
  const { routes = [] } = menu;
  console.log(menu);

  useEffect(() => {
    function getMenuFromStorage () {
      dispatch({
        type: 'Global/getMenu',
      });
    }

    getMenuFromStorage();
  }, [dispatch]);

  /**
   * 设置当前选中的submenu
   */
  useEffect(() => {
    setSelectedMenu(props.location.pathname);
    let currentSubMenuKey = -1;
    if (routes) {
      routes.some((v, i) => {
        if (v.path === `/${ props.location.pathname.split('/')[1] }`) {
          currentSubMenuKey = i;
          return true;
        }
        return false;
      });
    }
    if (currentSubMenuKey !== -1) {
      setSelectedSubMenu(String(currentSubMenuKey));
    }
  }, [props.location.pathname, menu, routes]);

  /**
   * 渲染左侧主菜单
   * @returns {null|*}
   */
  function renderMenu () {
    if (routes && routes.length) {
      return routes.map(renderSubMenu);
    }
    return null;
  }

  /**
   * 渲染子菜单
   * @param item
   * @param index
   * @returns {*}
   */
  function renderSubMenu (item, index) {
    if (item.routes && item.routes.length > 0) {
      return (
        <SubMenu key={ index } title={ item.menuName } onTitleClick={ onSubMenuClick }>
          { item.routes ? item.routes.map(v => {
            return (
              <Menu.Item key={ v.path }>
                { v.menuName }
              </Menu.Item>
            );
          }) : null }
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={ item.path }>
          { item.menuName }
        </Menu.Item>
      );
    }
  }

  /**
   * 子菜单展开、关闭操作
   * @param e
   */
  function onSubMenuClick (e) {
    const { key } = e;
    if (selectedSubMenu === key) {
      setSelectedSubMenu('');
    } else {
      setSelectedSubMenu(key);
    }
  }

  function onMenuItemClick (e) {
    setSelectedMenu(e.key);
    router.push(e.key);
  }

  return (
    <Layout style={ { height: '100%' } }>
      { routes && routes.length ? (
        <Sider width={ 200 } theme={ 'light' }>
          <Menu
            mode="inline"
            selectedKeys={ [selectedMenu] }
            openKeys={ [selectedSubMenu] }
            onClick={ onMenuItemClick }
          >
            { renderMenu() }
          </Menu>
        </Sider>
      ) : null }
      <Content>
        { props.children }
      </Content>
    </Layout>
  );
};

function mapStateToProps ({ Global }) {
  return {
    Global,
  };
}

export default connect(mapStateToProps)(BasicLayout);

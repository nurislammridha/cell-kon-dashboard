import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Brand",
    to: "/brand",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Unit",
    to: "/unit",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Size",
    to: "/size",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Color",
    to: "/color",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Category",
    to: "/category",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Sub Category",
    to: "/sub-category",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Sub Sub Category",
    to: "/sub-sub-category",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Seller",
    to: "/seller",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Propduct",
    to: "/product",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Campaign",
    to: "/campaign",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Order Management",
    route: "",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Order Confirm",
        to: "/order-confirm",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Order Processing",
        to: "/order-processing",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Order Picked",
        to: "/order-picked",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Order Shipped",
        to: "/order-shipped",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Order Delivered",
        to: "/order-delivered",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Delivered List",
        to: "/delivered-list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cancel List",
        to: "/cancelled-list",
      },
    ]
  }
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "User",
  //   to: "/user",
  //   icon: "cil-star",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Order Accept",
  //   to: "/order-accept",
  //   icon: "cil-star",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Order Processing",
  //   to: "/order-processing",
  //   icon: "cil-star",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Order Delivering",
  //   to: "/order-delivering",
  //   icon: "cil-star",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Order Delivered",
  //   to: "/order-delivered",
  //   icon: "cil-star",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Vendor",
  //   to: "/vendor",
  //   icon: "cil-star",
  // },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Admin",
  //   to: "/admin",
  //   icon: "cil-star",
  // },

  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["Components"],
  // },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Base",
  //   route: "/base",
  //   icon: "cil-puzzle",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Breadcrumb",
  //       to: "/base/breadcrumbs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Cards",
  //       to: "/base/cards",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Carousel",
  //       to: "/base/carousels",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Collapse",
  //       to: "/base/collapses",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Forms",
  //       to: "/base/forms",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Jumbotron",
  //       to: "/base/jumbotrons",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "List group",
  //       to: "/base/list-groups",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Navs",
  //       to: "/base/navs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Navbars",
  //       to: "/base/navbars",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Pagination",
  //       to: "/base/paginations",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Popovers",
  //       to: "/base/popovers",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Progress",
  //       to: "/base/progress-bar",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Switches",
  //       to: "/base/switches",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tables",
  //       to: "/base/tables",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tabs",
  //       to: "/base/tabs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Tooltips",
  //       to: "/base/tooltips",
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Buttons',
  //   route: '/buttons',
  //   icon: 'cil-cursor',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Brand buttons',
  //       to: '/buttons/brand-buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Dropdowns',
  //       to: '/buttons/button-dropdowns',
  //     }
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: 'cil-chart-pie'
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Toaster',
  //       to: '/notifications/toaster'
  //     }
  //   ]
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // }
];

export default _nav;

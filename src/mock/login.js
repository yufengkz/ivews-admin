import { getParams } from '@/libs/util'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}


const MENULISTDATA = [
  {
    path:'/directive',
    name: 'directive',
    title: "第一组",
    component: "Main",
    meta: {
      hide: true
    },
    children: [
      {
        path: 'directive_page',
        name: 'directive_page',
        meta: {
          icon: 'ios-book',
          title: '指令'
        },
        component: "directive/directive"
      }
    ]
  },
  {
    path: '',
    name: 'doc',
    title: '文档',
    icon: 'ios-book',
    component: "Main",
    meta: {
      title: '文档',
      href: 'https://lison16.github.io/iview-admin-doc/#/',
      icon: 'ios-book',
      access: ['super_admin'],//页面权限
    }
  },
  {
      path: '/join',
      name: 'join',
      component: 'Main',
      children: [
        {
          path: 'join_page',
          name: 'join_page',
          meta: {
            icon: '_qq',
            title: 'QQ群'
          },
          component: 'join-page'
        }
      ]
    },
    {
      path: '/components',
      name: 'components',
      meta: {
        icon: 'logo-buffer',
        title: '组件'
      },
      component: 'Main',
      children: [
        {
          path: 'count_to_page',
          name: 'count_to_page',
          meta: {
            icon: 'md-trending-up',
            title: '数字渐变'
          },
          component: 'components/count-to/count-to'
        },
        {
          path: 'drag_list_page',
          name: 'drag_list_page',
          meta: {
            icon: 'ios-infinite',
            title: '拖拽列表'
          },
          component: 'components/drag-list/drag-list'
        },
        {
          path: 'tables_page',
          name: 'tables_page',
          meta: {
            icon: 'md-grid',
            title: '多功能表格'
          },
          component: 'components/tables/tables.vue'
        },
        {
          path: 'split_pane_page',
          name: 'split_pane_page',
          meta: {
            icon: 'md-pause',
            title: '分割窗口'
          },
          component: 'components/split-pane/split-pane'
        },
        {
          path: 'markdown_page',
          name: 'markdown_page',
          meta: {
            icon: 'logo-markdown',
            title: 'Markdown编辑器'
          },
          component: 'components/markdown/markdown'
        },
        {
          path: 'editor_page',
          name: 'editor_page',
          meta: {
            icon: 'ios-create',
            title: '富文本编辑器'
          },
          component: 'components/editor/editor'
        },
        {
          path: 'icons_page',
          name: 'icons_page',
          meta: {
            icon: '_bear',
            title: '自定义图标'
          },
          component: 'components/icons/icons'
        }
      ]
    },
    {
      path: '/update',
      name: 'update',
      meta: {
        icon: 'md-cloud-upload',
        title: '数据上传'
      },
      component: 'Main',
      children: [
        {
          path: 'update_table_page',
          name: 'update_table_page',
          meta: {
            icon: 'ios-document',
            title: '上传Csv'
          },
          component: 'update/update-table'
        },
        {
          path: 'update_paste_page',
          name: 'update_paste_page',
          meta: {
            icon: 'md-clipboard',
            title: '粘贴表格数据'
          },
          component: 'update/update-paste'
        }
      ]
    },
    {
       path: '/excel',
       name: 'excel',
       meta: {
         icon: 'ios-stats',
         title: 'EXCEL导入导出'
       },
       component: 'Main',
       children: [
         {
           path: 'upload-excel',
           name: 'upload-excel',
           meta: {
             icon: 'md-add',
             title: '导入EXCEL'
           },
           component: 'excel/upload-excel'
         },
         {
           path: 'export-excel',
           name: 'export-excel',
           meta: {
             icon: 'md-download',
             title: '导出EXCEL'
           },
           component: 'excel/export-excel'
         }
       ]
     },
     {
       path: '/tools_methods',
       name: 'tools_methods',
       meta: {
         hide: true
       },
       component: 'Main',
       children: [
         {
           path: 'tools_methods_page',
           name: 'tools_methods_page',
           meta: {
             icon: 'ios-hammer',
             title: '工具方法',
             beforeCloseName: 'before_close_normal'
           },
           component: 'tools-methods/tools-methods'
         }
       ]
     },
     {
       path: '/multilevel',
       name: 'multilevel',
       meta: {
         icon: 'md-menu',
         title: '多级菜单'
       },
       component: 'Main',
       children: [
         {
           path: 'level_2_1',
           name: 'level_2_1',
           meta: {
             icon: 'md-funnel',
             title: '二级-1'
           },
           component: 'multilevel/level-2-1'
         },
         {
           path: 'level_2_2',
           name: 'level_2_2',
           meta: {
             access: ['super_admin'],
             icon: 'md-funnel',
             showAlways: true,
             title: '二级-2'
           },
           component: 'parentView',
           children: [
             {
               path: 'level_2_2_1',
               name: 'level_2_2_1',
               meta: {
                 icon: 'md-funnel',
                 title: '三级'
               },
               component: 'multilevel/level-2-2/level-3-1'
             }
           ]
         },
         {
           path: 'level_2_3',
           name: 'level_2_3',
           meta: {
             icon: 'md-funnel',
             title: '二级-3'
           },
           component: 'multilevel/level-2-3'
         },
       ]
     },
     {
       path: '/argu',
       name: 'argu',
       meta: {
         hideInMenu: true
       },
       component: 'Main',
       children: [
         {
           path: 'params/:id',
           name: 'params',
           meta: {
             icon: 'md-flower',
             title: route => `动态路由-${route.params.id}`,
             notCache: true,
             beforeCloseName: 'before_close_normal'
           },
           component: 'argu-page/params'
         },
         {
           path: 'query',
           name: 'query',
           meta: {
             icon: 'md-flower',
             title: route => `带参路由-${route.query.id}`,
             notCache: true
           },
           component: 'argu-page/query'
         }
       ]
     }

]


export const login = req => {
  req = JSON.parse(req.body)
  return {token: USER_MAP[req.userName].token}
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}

export const getMenuInfo = req => {

  return MENULISTDATA
}

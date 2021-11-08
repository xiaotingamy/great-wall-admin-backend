/*
 * @Description: 
 * @version: 
 * @Author: guoxt
 * @Date: 2021-10-31 17:27:38
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-07 16:19:47
 */
module.exports = {
  // apps是一个json结构的数组 ，每一个数组成员对应一个pm2中运行的应用
  apps: [
    {
      // 应用程序名称
      name: 'API',
      // 执行文件
      script: './bin/www',
      // 传递给脚本的参数
      args: 'one two',
      // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
      instances: 1,
      // 启用/禁用应用程序崩溃或退出时自动重启，默认为true, 发生异常的情况下自动重启
      autorestart: true,
      // 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
      watch: true,
      // 不用监听的文件
      ignore_watch: [
        'node_modules',
        'logs'
      ],
      // 最大内存限制数，超出自动重启
      max_memory_restart: '1G',
      // 生产环境配置
      env_prod: {
        'NODE_ENV': 'production',
        'REMOTE_ADDR': ''
      },
      // 开发环境配置
      env_dev: {
        'NODE_ENV': 'development',
        'REMOTE_ADDR': ''
      },
      // 测试环境配置
      env_test: {
        'NODE_ENV': 'test',
        'REMOTE_ADDR': ''
      }
    }
  ]
}

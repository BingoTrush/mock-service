export namespace Types {
    /**
     * 运行的环境
     */
    type RunEnv = 'local' | 'dev' | 'beta' | 'prod';
    /**
     * 部署的环境
     */
    type Deploy = 'local' | 'dev' | 'beta' | 'preview' | 'prod';
    /**
     * 支持的语言
     */
    type Lang = 'zu-ZA' | 'zh-TW' | 'zh-CN' | 'vi-VN' | 'th-TH' | 'ru-RU' | 'ms-MY' | 'ko-KR' | 'ja-JP' | 'id-ID' | 'fr-FR' | 'en-US' | 'de-DE';
    /**
     * 当前请求的配置
     */
    interface ReqConfig {
        /**
         * 运行环境
         */
        RUN_ENV: RunEnv;
        /**
         * 部署的环境
         */
        DEPLOY: Deploy;
        /**
         * 当前的项目名称
         */
        PROJECT_NAME: string;
        /**
         * 客户端端请求的基本api
         */
        CLIENT_BASE_API?: string;
        /**
         * 服务器端请求的基本api
         */
        SERVER_BASE_API?: string;
        /**
         * CDN 地址
         */
        CDN_BASE_URL: string;
        /**
         * 当前请求的语言地址
         */
        LANG: Lang;
        /**
         * 当前请求的域名
         */
        HOST_NAMR: string;
        /**
         * 当前的版本号
         */
        VERSION: string;
        /**
         * 代理的域名
         */
        proxy: {
            target: string;
        };
    }
    /**
     * 请求的响应体
     */
    export namespace Response {
        /**
         * 如果你需要添加其它的code作为处理逻辑，请在此添加你需要的类型
         */
        type Code = 
        /**
         * 数据错误
         */
        -10000
        /**
         * 请求失败
         */
         | -10001
        /**
         * 代表未请求
         */
         | -10002
        /**
         * 正在请求中
         */
         | -10003
        /**
         * 内部错误
         */
         | 2410001
        /**
         * 必选参数不能为空
         */
         | 2410002
        /**
         * 参数无效
         */
         | 2410003
        /**
         * 分页参数无效
         */
         | 2410004
        /**
         * 分页索引无效
         */
         | 2410005
        /**
         * 路由不存在
         */
         | 2410006
        /**
         * 上传文件错误
         */
         | 2410007
        /**
         * 上传文件过大
         */
         | 2410008
        /**
         * 账号不能为空
         */
         | 2010001
        /**
         * 注册来源不能为空
         */
         | 2010002
        /**
         * 请输入正确的手机号
         */
         | 2010003
        /**
         * 密码不能为空
         */
         | 2010004
        /**
         * 密码无效
         */
         | 2010005
        /**
         * 请输入验证码
         */
         | 2010006
        /**
         * 图形验证码不正确
         */
         | 2010007
        /**
         * 短信验证码不能为空
         */
         | 2010008
        /**
         * 短信验证码不正确
         */
         | 2010009
        /**
         * 短信验证码已超时
         */
         | 2010010
        /**
         * 操作过于频繁，请一分钟后再试
         */
         | 2010011
        /**
         * 没有登录
         */
         | 2010012
        /**
         * token无效
         */
         | 2010013
        /**
         * 用户ID错误
         */
         | 2010014
        /**
         * 用户未查到
         */
         | 2010015
        /**
         * 昵称不能为空
         */
         | 2010016
        /**
         * 昵称无效
         */
         | 2010017
        /**
         * 邮箱不能为空
         */
         | 2010018
        /**
         * 邮箱无效
         */
         | 2010019
        /**
         * 邮箱验证码不能为空
         */
         | 2010020
        /**
         * 邮箱验证码不正确
         */
         | 2010021
        /**
         * 邮箱验证码已超时
         */
         | 2010022
        /**
         * 激活邮箱不存在或已过期
         */
         | 2010023
        /**
         * 请求超过5次时，需要输入图形验证码
         */
         | 2010024
        /**
         * 今日验证码获取次数过多，请明日再试
         */
         | 2010025
        /**
         * 同一IP下已超过最大发送量
         */
         | 2010026
        /**
         * 该昵称已存在
         */
         | 2010027
        /**
         * 请输入正确的账号或密码
         */
         | 2010028
        /**
         * 账号已被禁用
         */
         | 2010029
        /**
         * 账号未激活
         */
         | 2010030
        /**
         * 手机号码已存在
         */
         | 2010031
        /**
         * 手机号码不存在
         */
         | 2010032
        /**
         * SYMBOL参数必输
         */
         | 2110001
        /**
         * RESOLUTION参数必输
         */
         | 2110002
        /**
         * FROM参数必输
         */
         | 2110003
        /**
         * TO参数必输
         */
         | 2110004
        /**
         * FROM参数无效
         */
         | 2110005
        /**
         * TO参数无效
         */
         | 2110006
        /**
         * 错误的品种名
         */
         | 2110007
        /**
         * 跟随参数设置不正确！
         */
         | 2110008
        /**
         * 不能跟随自己
         */
         | 2110009
        /**
         * 交易员不能跟随别人
         */
         | 2110010
        /**
         * 跟随的对象不是交易员
         */
         | 2110011
        /**
         * 模拟账号固定跟随手数不超过0
         */
         | 2110012
        /**
         * 模拟账号按倍数最多2倍跟随，持仓总手数不超过3手。
         */
         | 2110013
        /**
         * 经纪商限制最小下单手数
         */
         | 2110014
        /**
         * 跟随方向（direction）参数不正确
         */
         | 2110015
        /**
         * 跟随策略（strategy）参数不正确
         */
         | 2110016
        /**
         * 经纪商（agency）参数不正确
         */
         | 2110017
        /**
         * 交易周期范围参数不正确
         */
         | 2110018
        /**
         * 您发送太频繁，请稍候重试
         */
         | 2310001
        /**
         * 发送内容不可完全一致
         */
         | 2310002
        /**
         * DATE参数无效
         */
         | 2310003
        /**
         * 不能关注自己
         */
         | 2310004
        /**
         * 内容为空
         */
         | 2310005
        /**
         * 文本长度不足，请发短微博
         */
         | 2310006
        /**
         * 发言包括敏感信息，请遵循本站规范。
         */
         | 2310007
        /**
         * 因发送敏感信息，您已被管理员禁言。如果有疑问，请联系Secretary
         */
         | 2310008
        /**
         * 图片不能为空
         */
         | 2310009
        /**
         * 无可
         */
         | 2310010
        /**
         * 一个用户15分钟内只能发布10条
         */
         | 2310011
        /**
         * 无近期联系人
         */
         | 2310012
        /**
         * 存在敏感字
         */
         | 2310013
        /**
         * 服务器内部错误
         */
         | 500
        /**
         * 账号未激活
         */
         | 20104
        /**
         * 帐号已禁用，请联系客服
         */
         | 20106
        /**
         * 账户无效
         */
         | 21001
        /**
         * 用户名无效
         */
         | 21002
        /**
         * 邮箱无效
         */
         | 21003
        /**
         * 手机无效
         */
         | 21004
        /**
         * 昵称无效
         */
         | 21005
        /**
         * 密码无效
         */
         | 21006
        /**
         * 密码错误
         */
         | 21007
        /**
         * 账号无效
         */
         | 21008
        /**
         * 帐号或密码错误
         */
         | 22001
        /**
         * 活动不存在
         */
         | 22002
        /**
         * 第三方绑定账户不存在
         */
         | 22003
        /**
         * 组织账户不存在
         */
         | 22004
        /**
         * 合作伙伴用户不存在
         */
         | 22005
        /**
         * 个人信息不存在
         */
         | 22006
        /**
         * 账户认证不存在
         */
         | 22007
        /**
         * 用户地址不存在
         */
         | 22008
        /**
         * 用户设置不存在
         */
         | 22009
        /**
         * 账户已存在
         */
         | 23001
        /**
         * 用户名已存在
         */
         | 23002
        /**
         * 邮箱已存在
         */
         | 23003
        /**
         * 手机号码已存在
         */
         | 23004
        /**
         * 该昵称已存在
         */
         | 23005
        /**
         * 用户账号已存在
         */
         | 31001
        /**
         * MT4用户已存在
         */
         | 31002
        /**
         * 用户账号不存在
         */
         | 32001
        /**
         * MT4用户不存在
         */
         | 32002
        /**
         * 参数不可用
         */
         | 40001
        /**
         * 超出可用范围
         */
         | 40002
        /**
         * 标志未找到
         */
         | 40003
        /**
         * 未找到账户
         */
         | 40004
        /**
         * 命令不可用
         */
         | 40005
        /**
         * 未授权
         */
         | 40006
        /**
         * 标志不可用
         */
         | 40007
        /**
         * SLTP不可用
         */
         | 40008
        /**
         * 交易不可用
         */
         | 40009
        /**
         * 参数不可用
         */
         | 41001
        /**
         * 账号ID不可用
         */
         | 41002
        /**
         * 方法不可用
         */
         | 41003
        /**
         * 数据发送失败
         */
         | 41004
        /**
         * 不可交易
         */
         | 41005
        /**
         * 不可用金额
         */
         | 41006
        /**
         * 订单创建失败
         */
         | 41007
        /**
         * 用户信息不可用
         */
         | 51001
        /**
         * 用户名不可用
         */
         | 51002
        /**
         * 头像不可用
         */
         | 51003
        /**
         * 用户ID不可用
         */
         | 51004
        /**
         * 聊天室ID不可用
         */
         | 51005
        /**
         * 聊天室详情不可用
         */
         | 51006
        /**
         * 消息状态不可用
         */
         | 51007
        /**
         * 公用请求不可用
         */
         | 51008
        /**
         * 会员未找到
         */
         | 62001
        /**
         * 会员上级未找到
         */
         | 62002
        /**
         * 会员关系未找到
         */
         | 62003
        /**
         * 用户会员未找到
         */
         | 62004
        /**
         * 会员信息未找到
         */
         | 62005
        /**
         * 用户会员已存在
         */
         | 63001
        /**
         * 直播不可用
         */
         | 71001
        /**
         * 品种名不存在
         */
         | 81103 | 2000024;
        type CodeSuccess = 0;
        interface Success<D> {
            /**
             * 当前的请求码
             */
            code: 0;
            /**
             * 当前请求的消息提示
             */
            message: string;
            /**
             * 当前请求返回的数据
             */
            data: D;
        }
        export interface Error<D> {
            /**
             * 当前的请求码
             */
            code: Code;
            /**
             * 当前请求的消息提示
             */
            message: string;
            /**
             * 当前请求返回的数据
             */
            data?: D;
        }
        export type All<D> = Success<D> | Error<D>;
    }
    /**
     * 组件成功操作目标
     */
    interface ComponentSuccess<D> {
        type: 'success';
        data: D;
    }
    /**
     * 组件关闭操作
     */
    interface ComponentClose {
        type: 'close';
    }
    type ComponentResponse<D> = ComponentSuccess<D> | ComponentClose;
}

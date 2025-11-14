// Vue3 应用配置和数据
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            activeSection: 'home',
            navigation: [
                { id: 'home', title: 'Home', src: 'images/logo.png'},
                { id: 'about', title: 'About', icon: 'flaticon-social' },
                { id: 'resume', title: 'Resume', icon: 'flaticon-curriculum' },
                { id: 'services', title: 'Services', icon: 'flaticon-layers-1' },
                { id: 'work', title: 'Works', icon: 'flaticon-tools' },
                { id: 'blog', title: 'Blog', icon: 'flaticon-blog' },
                { id: 'contact', title: 'Contact', icon: 'flaticon-send-mail' }
            ],
            profile: {
                name: 'Simon',
                greeting: '你好',
                titles: ['web 开发人员', 'web 设计师', '拍照者'],
                description: '劝君莫惜金缕衣，劝君惜取少年时。花开堪折直须折，莫待无花空折枝。岁月如梭逝，独留心中语。',
                avatar: 'https://foruda.gitee.com/avatar/1687183357018957729/5457408_northern_ink_dyeing_1687183356.png!avatar200',
                cvLink: 'http://sc.chinaz.com/',
                socialLinks: [
                    { name: 'Blog', url: '#', icon: 'fa flaticon-blog' },
                    { name: 'Gitee', url: 'https://gitee.com/northern_ink_dyeing', icon: 'fa fa-github' }
                ]
            },
            about: {
                description: '劝君莫惜金缕衣，劝君惜取少年时。花开堪折直须折，莫待无花空折枝。纨绔不饿死，儒冠多误身。丈人试静听，贱子请具陈。甫昔少年日，早充观国宾。读书破万卷，下笔如有神。',
                infoList1: [
                    { label: 'Name', value: 'Simon', isLink: false },
                    { label: 'Gitee', value: 'https://gitee.com/northern_ink_dyeing', isLink: true }
                ],
                infoList2: [
                    { label: 'Email', value: 'mainc@foxmail.com', isLink: false },
                    { label: 'Freelance', value: 'Available', isLink: false }
                ]
            },
            skills: [
                { name: 'HTML5', percentage: 75, color: '#9147ff' },
                { name: 'CSS3', percentage: 75, color: '#ff5e7e' },
                { name: 'VUE2/3', percentage: 75, color: '#ffc713' },
                { name: 'JavaScript5/6', percentage: 75, color: '#51dbc3' }
            ],
            resume: {
                employment: [
                    {
                        title: 'Web Design',
                        period: '2018-2020',
                        company: 'University of stuties',
                        description: '系统学习HTML、CSS、JavaScript、Mysql、NodeJs、Ajax、Vue、Angular、Bootstrap'
                    },
                    {
                        title: 'Web Development',
                        period: '2020-2023',
                        company: 'Company or enterprise',
                        description: '建设搭建WEB网站、APP、小程序、管理系统等，并学习使用APICloud或Hbuilder等工具开发软件'
                    },
                    {
                        title: 'Specialization Course',
                        period: '2023-至今',
                        company: 'Summary Review',
                        description: '可以快速复制app等的开发，分享自己的经验并作分享和交流以求更大的突破和进步'
                    }
                ],
                experience: [
                    {
                        title: 'WEB前端全站开发工程师',
                        period: '2022-Present',
                        company: '银商融信',
                        description: '负责开发和维护日常代码更新'
                    },
                    {
                        title: '前端开发工程师',
                        period: '2021-2022',
                        company: '哈彼树有限公司',
                        description: '负责项目研发讨论，其他需保密'
                    },
                    {
                        title: '前端开发工程师',
                        period: '2020-2021',
                        company: '雀科科技有限公司',
                        description: '负责前端开发和维护，其他需保密'
                    }
                ]
            },
            services: [
                {
                    title: 'UI/UX Design',
                    description: 'Lorem ipsum dolor amet constur adipisicing elit',
                    icon: 'icon flaticon-pen-tool'
                },
                {
                    title: 'Web Design',
                    description: 'Lorem ipsum dolor amet constur adipisicing elit',
                    icon: 'icon flaticon-folder'
                },
                {
                    title: 'Branding',
                    description: 'Lorem ipsum dolor amet constur adipisicing elit',
                    icon: 'icon flaticon-computer'
                },
                {
                    title: 'Logo Design',
                    description: 'Lorem ipsum dolor amet constur adipisicing elit',
                    icon: 'icon flaticon-layers-1'
                },
                {
                    title: 'Apps Design',
                    description: 'Lorem ipsum dolor amet constur adipisicing elit',
                    icon: 'icon flaticon-web-design'
                },
                {
                    title: 'Photography',
                    description: 'Lorem ipsum dolor amet constur adipisicing elit',
                    icon: 'icon flaticon-photo-camera'
                }
            ],
            works: [
                { id: 1, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/1.jpg', colClass: 'col-md-6' },
                { id: 2, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/2.jpg', colClass: 'col-md-6' },
                { id: 3, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/3.jpg', colClass: 'col-md-6' },
                { id: 4, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/4.jpg', colClass: 'col-md-6' },
                { id: 5, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/5.jpg', colClass: 'col-sm-6' },
                { id: 6, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/6.jpg', colClass: 'col-sm-6' }
            ],
            blogPosts: [
                {
                    id: 1,
                    title: 'Let\'s Talk About Design',
                    image: 'images/resource/blog-1.jpg',
                    day: '02',
                    month: 'Sep',
                    author: 'admin',
                    category: 'Design'
                },
                {
                    id: 2,
                    title: 'Let\'s Talk About Design',
                    image: 'images/resource/blog-2.jpg',
                    day: '04',
                    month: 'Sep',
                    author: 'admin',
                    category: 'Design'
                },
                {
                    id: 3,
                    title: 'Let\'s Talk About Design',
                    image: 'images/resource/blog-3.jpg',
                    day: '06',
                    month: 'Sep',
                    author: 'admin',
                    category: 'Design'
                }
            ],
            contactForm: {
                username: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            }
        }
    },
    methods: {
        scrollToSection(sectionId) {
            this.activeSection = sectionId;
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        handleScroll() {
            const sections = ['home', 'about', 'resume', 'services', 'work', 'blog', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && scrollPosition >= section.offsetTop) {
                    this.activeSection = sections[i];
                    break;
                }
            }
        },
        submitContactForm() {
            // 表单验证
            if (!this.validateForm()) {
                return;
            }

            // 这里可以添加表单提交逻辑
            console.log('表单提交:', this.contactForm);

            // 显示提交成功消息
            this.showSuccessMessage();

            // 重置表单
            this.resetContactForm();
        },
        validateForm() {
            const { username, email, subject, phone, message } = this.contactForm;

            if (!username.trim()) {
                alert('请输入您的姓名');
                return false;
            }

            if (!email.trim()) {
                alert('请输入您的邮箱');
                return false;
            }

            // 邮箱格式验证
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('请输入有效的邮箱地址');
                return false;
            }

            if (!subject.trim()) {
                alert('请输入主题');
                return false;
            }

            if (!phone.trim()) {
                alert('请输入您的电话');
                return false;
            }

            if (!message.trim()) {
                alert('请输入留言内容');
                return false;
            }

            return true;
        },
        showSuccessMessage() {
            // 创建自定义成功消息
            const successDiv = document.createElement('div');
            successDiv.className = 'form-success-message';
            successDiv.innerHTML = `
                <div style="background: #4CAF50; color: white; padding: 15px; border-radius: 5px; margin: 10px 0; text-align: center;">
                    <i class="fa fa-check-circle" style="margin-right: 10px;"></i>
                    感谢您的留言！我会尽快回复您。
                </div>
            `;

            const form = document.querySelector('.contact-form form');
            form.insertBefore(successDiv, form.firstChild);

            // 3秒后自动移除消息
            setTimeout(() => {
                if (successDiv.parentNode) {
                    successDiv.parentNode.removeChild(successDiv);
                }
            }, 3000);
        },
        resetContactForm() {
            this.contactForm = {
                username: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            };
        },
        initSkillCharts() {
            // 初始化技能图表
            if (typeof $ !== 'undefined' && $.fn.knob && $('.dial').length > 0) {
                $('.dial').each(function () {
                    const $this = $(this);
                    if (!$this.data('knob-initialized')) {
                        $this.knob({
                            readOnly: true,
                            width: '90',
                            height: '90',
                            lineCap: 'normal',
                            fgColor: $this.data('fgcolor'),
                            bgColor: '#f5f5f5'
                        });
                        $this.data('knob-initialized', true);
                    }
                });
            }
        },
        initCounters() {
            // 初始化计数器动画
            if (typeof $ !== 'undefined' && $.fn.animateNumber) {
                $('.count-text').each(function () {
                    const $this = $(this);
                    if (!$this.data('counter-initialized')) {
                        $this.animateNumber({
                            number: $this.data('stop'),
                            numberStep: function (now, tween) {
                                const target = $(tween.elem);
                                target.text(Math.floor(now));
                            }
                        }, 2000);
                        $this.data('counter-initialized', true);
                    }
                });
            }
        },
        initScrollAnimations() {
            // 初始化滚动动画
            if (typeof $ !== 'undefined' && $.fn.appear) {
                $('.wow').appear();
            }
        },
        initAnimations() {
            // 延迟初始化，确保DOM完全渲染
            setTimeout(() => {
                this.initSkillCharts();
                this.initCounters();
                this.initScrollAnimations();
            }, 100);
        }
    },
    mounted() {
        // 监听滚动事件
        window.addEventListener('scroll', this.handleScroll);

        // 初始化滚动位置
        this.handleScroll();

        // 确保页面进入时显示首页内容
        setTimeout(() => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'instant' });
            }
        }, 100);

        // 初始化技能图表和动画
        this.initAnimations();

        // 监听DOM变化，确保技能图表正确初始化
        this.observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    this.initSkillCharts();
                }
            });
        });

        this.observer.observe(document.getElementById('app'), {
            childList: true,
            subtree: true
        });
    },
    beforeUnmount() {
        // 移除滚动监听
        window.removeEventListener('scroll', this.handleScroll);

        // 清理观察器
        if (this.observer) {
            this.observer.disconnect();
        }
    }
});

// 挂载应用
app.mount('#app');


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

var RCApp = angular.module('RC', [])

RCApp.controller('PoCtrl',
    function ($scope, $sce,$window) {
        var title = window.location.href;
        console.log(title);
        $scope.portfolios=portfolios;
        $scope.title= getUrlParam('project');


        for(var i=0;i<portfolios.length;i++){
            var t1=portfolios[i].title.replace(/\s+/g,"");
            var t2=$scope.title.replace(/\s+/g,"");
            portfolios[i].titleLower=t1.toLowerCase();

            if(portfolios[i].video){
                $scope.URL=$sce.trustAsResourceUrl("http://" + portfolios[i].video)
                portfolios[i].video=$scope.URL;
            }
            if(t1.toLowerCase()==t2.toLowerCase()){
                $scope.portfolio=portfolios[i];
                console.log(t2.toLowerCase());
            }
        }
        $scope.test=123;

    });


/*

0.xiaotao
1.noise
2.timing pill jar
3.mirror
4.nap
5.ledrive
6.microsoft
7.bus
8.warm
9.speed limit
10.share
11.fire fighter
12.rise
13.ring-toss
14.sleepcaster
15.comming soon


 */







var portfolios = [
    {
        title          : 'Xiaotao App',
        time           : '2014 Summer',
        team           : '2 Members Project',
        role           : 'UI/UX Developer',
        simpleDes      : 'Business Innovation Design',
        brief          : 'In this project, we need to find a business opportunity and create a business model for a certain field.',
        goal           : 'Create a brand new business model combined with the online shopping, second-hand items transaction, online-to-of- fline, etc. Find the conflict in traditional fields and break the limits.',
        plan           : 'To create a business model, service ecosystem, and a minimum viable product include prototype of web-app.',
        pics           : [2, 3, 4, 5, 6],
        relatedProjects: [1,5,6,14],
        finished       : true
    },
    {
        title          : 'Noisescape',
        time           : '2014 Summer',
        team           : '4 Members Project',
        role           : 'Hardware/UX Developer',
        simpleDes      : 'Information Design',
        theme          : 'dark',
        brief          : 'Noisescape can ivestigate the noise of a certain area. My main contribution lies in interactive design, circuit and software programming.',
        goal           : 'Create a brand new method of data visualization combined with big data, software, hardware, etc.',
        plan           : 'To find the solutions concerning intuitive and timely method of data visualization. To design the product based on researches.',
        pics           : [2, 3, 4, 5, 6],
        relatedProjects: [0,3,5,6],
        finished       : true
    },
    {
        title          : 'Timing Pill Jar',
        time           : '2015 Spring',
        team           : '4 Members Project',
        role           : 'Product Designer',
        simpleDes      : 'Concept Design',
        brief          : 'Timming Pill Jar is designed for elders to take medicine on time . It can be a big release for elders to remember themselves to take pills.',
        goal           : '',
        plan           : '',
        pics           : [2, 3, 4, 5],
        relatedProjects: [13,4,3,12],
        finished       : true
    },
    {
        title          : 'Projector Corner Mirror',
        time           : '2015 Summer',
        team           : '4 Members Project',
        role           : 'Product Designer',
        simpleDes      : 'Social Innovation',
        theme          : 'dark',
        brief          : 'It can help to project an advance warning for drivers and passerbys therefore to avoid the collision of vehicles and pedestrians on the street corner.',
        goal           : 'Pedestrains could be warned in advance when they encounter approaching cars. The product should be affordable and accessible.',
        plan           : 'To figure out the correct method of forecasting coming cars.We should pay attention to the visualization of traffic information in order that projected warnings could be easily recognised.',
        pics           : [2, 3, 4],
        relatedProjects: [ 1,3,4,5 ],
        finished       : true
    },
    {
        title          : 'Nap Pillow',
        time           : '2015 ' +
        '',
        team           : '6 Members Project',
        role           : 'UX/Product Designer',
        simpleDes      : 'Product Design',
        brief          : 'Nap Pillow is a device that can guide user to form a efficient nap habit. It could wake users up before they enter the deep sleep stage.',
        goal           : 'To find interesting and reliable way of waking-up for users, to guide them efficiently and correctly.',
        plan           : "To conduct research about white collar workers' current habits of sleeping and current pillows and find the problems. To find the solutions concerning nap habits, to design the product based on researches and prototypes.",
        pics           : [2, 3, 4, 5, 6, 7],
        relatedProjects: [ 13,2,12,3],
        finished       : true
    },
    {
        title          : 'LeDrive',
        time           : '2014 Summer',
        team           : 'Intern Project',
        role           : 'Product Assistant Intern',
        simpleDes      : 'Interaction Design',
        theme          : 'dark',
        brief          : "This project need use the advantage of smart phone device to design this special APP. Not just to design a single product, we're expected to design a ecosystem that might include the hardware, software and service.",
        goal           : 'This design should combined big data, OBD devices, etc, helping users check vehicle information.',
        plan           : 'To find a point to design this APP via marketing research and user interview. To optimize UE so that the APP could be more effective.',
        pics           : [2, 3, 4, 5],
        relatedProjects: [0,1,14,6],
        finished       : true
    },
    {
        title          : 'Microsoft Dictionary',
        time           : '2015 Winter',
        team           : 'Intern Project',
        role           : 'Interaction Design Intern',
        simpleDes      : 'Interaction Design & Programming',
        brief          : 'This project need use information integration and classification to design this special website.',
        goal           : 'Based on the machine learning backstage technology and interactive interface, this design should provide data efficiently and systematically to help users collect clusters of information.',
        plan           : 'To find a point to design this website via technology background research and information architecture. To realize the front-end interface and optimize user experience.',
        pics           : [2, 3, 4],
        relatedProjects: [0,1,14,5],
        finished       : true
    },
    {
        title          : 'Self-Circulate Public Bike System',
        time           : '2015 Spring',
        team           : '4 Members Project',
        role           : 'Product Designer',
        simpleDes      : 'System Innovation',
        brief          : 'This is a group work for the competition held by ILAB from France , named "Breath in City". So we designed a public bike self circulate system , powed by current bus system.',
        goal           : 'Use the minimum cost to improve the public bike scheduling system.',
        plan           : 'To do full survey and brainstrom. To proposale a viable bike circulate concept.',
        pics           : [2,3],
        relatedProjects: [ 1,2,3,4],
        finished       : true
    },



    /*Other works*/

    {
        title          : 'Warm-light',
        time           : '2014 Spring',
        team           : '4 Members Project',
        role           : 'Product Designer',
        simpleDes      : 'Concept Design',
        theme          : 'dark',
        brief          : 'When the temperature drops, stray animals tend to gather around ground lamps to keep them warm. Also, a shelter space is necessary to prevent animals from getting wet during the rainy days. As a solution dfor those homeless animals, warm-light is a street ground-lamp which can provide a safety and warm interspace for stray animals by re-using the wasted heat',
        goal           : '',
        plan           : '',
        pics           : [3],
        relatedProjects: [2,3,4,7],
        finished       : true
    },
    {
        title          : 'Speed Limit',
        time           : '2014 Spring',
        team           : '4 Members Project',
        role           : 'Product Designer',
        simpleDes      : 'Concept Design'


    },
    {
        title          : 'Share',
        time           : 'x',
        team           : 'x',
        role           : 'Product Designer',
        simpleDes      : 'Concept Design'


    },
    {
        title          : 'Fire Fighter Ectoskeleton',
        time           : '2016 Spring',
        team           : '4 Members Project',
        role           : 'Product Designer',
        simpleDes      : 'CONFORMITY INNOVATION',
        brief          : 'A ectoskeleton which can enhance the fire fighter’s rescue efficiency, breaking obstacles ability. We design the product based on viable structure and make a 3D -print model.',
        goal           : '',
        plan           : '',
        pics           : [],
        relatedProjects: [ 1,2,3,4],
        finished       : true
    },
    {
        title          : 'Rise and Fall',
        time           : '2014 Summer',
        team           : 'Individual Project',
        role           : 'Product Designer',
        simpleDes      : 'Cultural Innovation',
        brief          : 'Rise-and-fall is a humidifier that was inspired by chinese traditional incense culture.',
        goal           : '',
        plan           : '',
        pics           : [2,3],
        relatedProjects: [ 2,4,13,7],
        finished       : true
    },
    {
        title          : 'Ring-toss',
        time           : '2016 Summer',
        team           : 'Graduation Project',
        role           : 'Product Designer',
        simpleDes      : 'Emotional Design',
        brief          : 'The amount of information received by everyone is increasing rapidly with the development of the Internet. So we can say that this is an era of information. In this era, it’s distinct characteristics and the tide of digitalization need to be reformed by design, the humanized design and the design’s communication attribute need to be re-examined. This design chooses emotional design as a starting point to explore the reasonable relationship between people and machines. I tries to explore a feasible decompression solution to the office workers. The goal is to design a white noise audio based on interactive design.',
        concept        : '"Ring-Toss"  is an interactive white noise audio which is based on emotional design.  It will play user’s custom sound effect according to the number of wooden rings.  The product is inspired by the ringtoss game. Each pillar on the “Ring-Toss”  represents a type of sound effect. By this way, the product can arouse emotion sympathy and provoke thought through a more natural interaction.',
        goal           : '',
        plan           : '',
        pics           : [2],
        relatedProjects: [ 2,4,12,7],
        finished       : true
    },
    {
        title          : 'Sleepcaster',
        time           : '2016 Fall',
        team           : '4 Members Project',
        role           : 'UI/UX Designer',
        simpleDes      : 'Interaction Design',
        theme          : 'dark',
        brief          : 'Sleepcaster is a solution for sleep management for college students.The application allows students to manage their sleep by crowdsourcing the time required to complete assignments and predict the future workload.',

        goal           : 'This design should adopt a friendly way to guide users to have a healthy sleep management.',
        plan           : 'To develop the entire application experience focusing on the problems faced by college students. To develop a sleep management tool based around college student. To go through the whole user centered design process.',
        pics           : [2,3,4,5,6],
        relatedProjects: [ 0,1,5,6],
        video          : 'player.vimeo.com/video/199720880?title=0&byline=0&portrait=0',
        finished       : true
    },

    {
        title: 'Coming soon',
        time: 'N/A',
        team: 'N/A',
        role           : 'N/A',
        simpleDes      : '',
        relatedProjects: [ 15,15,15,15]
    }
];


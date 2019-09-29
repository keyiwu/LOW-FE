# 1. 什么是java
   - 面向对象语音oop
   - 它和c++相似
   - 语法简单
## java的特点
  - 简单易学
  - 面向对象
  - 跨平台
  - 安全稳定 不容易内存溢出
  - 支持多线程
  - 提供了丰富的大量类似网络化，多线程，面向对象系统需要的语言包(package) 实用程序包 I/O包 网络包 图形用户包 
# 2. what can Java Do
  - 面向对象的应用程序开发 
  - 各类网络应用
  - 计算过程的可视化
  - 动态画面/交互操作
  - Internet的系统管理
  - 数据库操作
# 3. java 和c++的区别
  - 无直接指针操作
  - 自动内存管理（自动释放内存）
  - 数据类型长度固定
  - 不用头文件
  - 不包含结构和联合
  - 不支持宏
  - 不用多重继承
  - 无类外全局变量
  - 无GOTO
  # 4. java三种核心机制
    - Java 虚拟机（JVM Java Virtual Machine）
    - 代码安全性检测（Code Security）
    - 垃圾收集机制（Garbage collection）
    jvm ：
    虚拟机：在一台计算机上又有软件或硬件模拟的计算机
    Java虚拟机（JVM）读取并处理经变异过的字节码Class文件
    Java虚拟机规范定义了：
      - 指令集
      - 寄存器集
      - 类文件结构
      - 堆栈
      - 垃圾收集堆
      - 内存区域
  JRE：java运行环境
  JRE （The Java Runtime Environment）
  JRE =JVM +API (Lib)
  JRE运行程序时的三项主要功能:
    - 加载代码： 由class loader完成
    - 校验代码 ： 由bytecode verifier 完成
    - 执行代码 : 由runtime interpreter完成
  理解：
      为何Java时跨平台（class文件与平台无关）
      为何Java时安全的（java有代码检查机制）
## Java自动垃圾回收技术
  ### 垃圾回收（garbage collection）
    在c/c++等语言中，由程序员负责回收无用内存
  - Java语言自动垃圾回收
      - 系统级线程跟踪存储空间的分配情况
      - 在JVM的空闲时，检查并释放那些可被释放的存储器空间
      - 程序员无须也无法精确控制和干预该回收过程
## JDK（Java开发工具包）
    JDK =JRE+Tools
    JRE= JVM+API
jdk下载 http:// java.sun.com
可以只下载JavaSE，也可以下与NetBeans绑定的版本
如果只运行java程序，则下载jre
    http:// java.com
JDK 提供的工具
  java 编译器 javac.exe
  java执行器  java.exe
  文档生成器  javadoc.exe
  java打包器 jar.exe
## 面向对象的程序设计
  对象（Object)
  对象具有两方面的含义：
    在现实世界中：
        是客观世界中的一个实体
    在计算机世界中：
        是一个可标识的存储区域
  类（class）
    类：具有共同属性和行为的对象集合
      属性： 变量（字段field）
      行为： 方法（方法method）
  类与对象的关系：
    类是对象的抽象（模板）
    对象是类的<font color='red'>实例</font>
      注： 类和对象有时都统称"对象"，为了明确起见，后者称为”对象实例“（instance）
## 面向对象的三大特征：封装，继承，多态
  ### 封装：
  - 模块化：将属性和行为封装在类中，程序定义了很多类
  - 信息隐蔽： 将类的细节部分隐藏起来
              用户只通过受保护的借口访问某个类
      `    class Person {
            private int age;
            public int getAge(){return age;}
            String name；
            void sayHello(){...}

          }`

    ### 继承性
      父类和子类之间共享数据和方法
      继承的好处
            更好的进行抽象与分类
            增强代码的重复率
            提高可维护性
    ### 多态
      不同的对象收到同一个消息（调用方法）可产生不同的效果
      实现的细节则由接收对象自行决定
      例 foo(Person ) {
        p.sayHello();
      }
      foo(new Student);
      foo(new Teacher);
 #### 面向对象设计思想的要点
  - 认为客观世界由各种对象组成
  - 程序的分析和设计都围绕着
    - 有哪些对象类
    - 每个类有哪些属性，哪些方法
    - 类之间的关系（继承，关联等）
    - 对象之间发送消息（调用方法）
# 5. java程序的类型
  在java SE 里面主要有两种类型 Application 和Applet 程序
  结构和运行环境不同
  前者是独立的程序，需要执行器（调用虚拟机）来运行
  后者是嵌在HTML页面的非独立的程序
    有专门的appletViewer来运行
    或者由WEB 浏览器（调用JAVA虚拟机）来运行
Application 程序
HEllo.java
`
public class HelloWorldApp{
  public static void main(String args[]){
    System.out.println("Hello World!");
  }
}
`
要点 ：
  class 是主体
  public类名与文件同名
  main())的写法是固定的
  Sytem.out.print 及println及printf
Applet 程序
HelloWroldApplet.java
import 表示导入
extends JApplet 表示继承
  Applet 或JApplet都可以
  有paint()方法，表示如何绘制
  没有main（）方法
  ### java程序的基本构成
   package 语句（0或1句）
   import 语句（0或多句）
      导入其他类的类库
    类定义----class（1或者多个）
       一个文件只能有一个public类（与文件同名）
  类=类头+类体
  类成员=字段（field ）+方法（method）
  字段（field，属性，变量） 方法（method，函数）
  方法=方法头+方法体
java 标识符：字母数字下划线$ ，数字不能开头
类名和接口的规范:采用驼峰命名，首字母必需大写
变量名和方法名的规范：首字母小写，其余首字母大写
包名:都小写，每个单词之间用.分隔
常量：所有字母都大写，每个单词之间用_分隔
Java的注释：
单行注释 // 
多行注释 /* */ 通常用于方法内的多行或者类的多行注释
文档注释 /** */ 用于类的说明或者方法的说明

开发步骤
创建一个java工程




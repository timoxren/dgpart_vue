<template>
    <breadcrumbs name="Блог"></breadcrumbs>

    <div id="blog-page" class="page blog-page">
        <div class="container">
            <div class="row">
                <!-- Post Content -->
                <div id="post-container" class="col-md-8" role="main">

                  <!--Start of v-for for Post Items -->

                  <div v-for="item in blogItems" :key="item.id" class="post-container">
                        <article class="post">
                            <div class="post-thumbnail">
                                <a href="#"><img src={{item.Thumbnail}}></a>
                            </div><!-- /.post-thumbnail -->
                            <div class="post-content">
                                <h2 class="post-title">
                                    <a href="single-page.html">{{item.Title}}</a>
                                </h2>
                                <div class="entry">
                                    <p>
                                        {{item.Description}}
                                    </p>
                                </div><!-- /.entry -->
                                <footer class="post-meta">
                                    <div class="continue-reading pull-left">
                                        <a href="single-page.html">Читать дальше ...</a>
                                    </div><!-- /.continue-reading -->
                                    <div class="entry-meta pull-right">
										<span class="entry-date">
											<i class="fa fa-clock-o"></i>
											{{item.Date}}
										</span>
                                        <span class="author">
											<a href="#" rel="author">
												<i class="fa fa-user"></i>
												{{item.Author}}
											</a>
										</span>
                                        <span class="comments-link">
											<a href="#" >
												<i class="fa fa-comment-o"></i>
												{{item.CommentsNum}}
											</a>
										</span>
                                        <span class="tag-links">
											<i class="fa fa-tag"></i>
											<a v-for="(tag, index) in item.TagLinks" :key="index" href="#" rel="tag">{{tag}}</a>
										</span>
                                    </div><!-- /.entry-meta -->
                                </footer><!-- /.post-meta -->
                            </div><!-- /.post-content -->
                        </article><!-- /.post -->

                     <!--end of v-for -->

                    </div><!-- /.post-container -->

                  <nav class="paging-navigation" role="navigation">
                    <a class="prev page-numbers pull-left" href="#"><i class="fa fa-chevron-left"></i></a>
                    <a class="page-numbers" href="#">1</a>
                    <a class="page-numbers active" href="#">2</a>
                    <a class="page-numbers" href="#">3</a>
                    <a class="page-numbers" href="#">4</a>
                    <a class="page-numbers" href="#">5</a>
                    <a class="next page-numbers pull-right" href="#"><i class="fa fa-chevron-right"></i></a>
                  </nav><!-- /.paging-navigation -->

                </div><!-- /.col-md-8 -->
                <!-- Post Content End -->


                <!-- Side Bar -->
                <div id="blog-sidebar" class="col-md-4">
                    <div class="blog-sidebar">
                        <aside class="widget widget_search">
                            <form role="search" class="search-form" action="#" method="get">
                                <input class="search-field" type="text" name="s" id="s" placeholder="Выедите запрос и нажмите Enter.." required>
                                <button class="btn" type="submit"><i class="fa fa-search"></i></button>
                            </form><!-- /.search-form -->
                        </aside><!-- /.widget -->

                        <aside class="widget widget_categories">
                            <h3 class="widget-title">
                                Категории
                            </h3><!-- /.widget-title -->

                            <ul>
                                <li><a href="#" >Веб-дизайн</a></li>
                                <li><a href="#" >Графический Дизайн</a></li>
                                <li><a href="#" >Электронная коммерция</a></li>
                                <li><a href="#" >Флеш Анимация</a></li>
                                <li><a href="#" >Темы</a></li>
                                <li><a href="#" >HTML5/CSS3</a></li>
                                <li><a href="#" >Кодирование</a></li>
                            </ul>
                        </aside><!-- /.widget -->

                        <aside class="widget widget_recent_entries">
                            <h3 class="widget-title">
                                Популярые Посты
                            </h3><!-- /.widget-title -->
                            <ul class="latest-post">
                                <li>
                                    <div class="widget_img">
                                        <a href="#">
                                            <img src="/images/avatar/pp-post-1.jpg" alt="avatar">
                                            <span class="overlay"></span>
                                        </a>
                                    </div><!-- /.widget_img -->
                                    <div class="recent-post-details">
                                        <a class="post-title" href="#">Перераспределение бюджета, согласно Ф.Котлеру</a><br>
                                        <time datetime="2015-03-29"><i class="fa fa-clock-o"></i> 29 Июнь</time>
                                        <a href="#"><i class="fa fa-user"></i> Иван Дионтьев</a>
                                    </div><!-- /.recent-post-details -->
                                </li>
                                <li>
                                    <div class="widget_img">
                                        <a href="#">
                                            <img src="/images/avatar/pp-post-2.jpg" alt="avatar">
                                            <span class="overlay"></span>
                                        </a>
                                    </div><!-- /.widget_img -->
                                    <div class="recent-post-details">
                                        <a class="post-title" href="#">Перераспределение бюджета, согласно Ф.Котлеру</a><br>
                                        <time datetime="2015-03-29"><i class="fa fa-clock-o"></i> 29 Июнь</time>
                                        <a href="#"><i class="fa fa-user"></i> Иван Дионтьев</a>
                                    </div><!-- /.recent-post-details -->
                                </li>
                                <li>
                                    <div class="widget_img">
                                        <a href="#">
                                            <img src="/images/avatar/pp-post-3.jpg" alt="avatar">
                                            <span class="overlay"></span>
                                        </a>
                                    </div><!-- /.widget_img -->
                                    <div class="recent-post-details">
                                        <a class="post-title" href="#">Перераспределение бюджета, согласно Ф.Котлеру</a><br>
                                        <time datetime="2015-03-29"><i class="fa fa-clock-o"></i> 29 Июнь</time>
                                        <a href="#"><i class="fa fa-user"></i> Иван Дионтьев</a>
                                    </div><!-- /.recent-post-details -->
                                </li>
                            </ul><!-- /.latest-post -->
                        </aside><!-- /.widget -->


                        <aside class="widget widget_accordion">
                            <h3 class="widget-title">
                                Виджет
                            </h3><!-- /.widget-title -->
                            <div class="panel-group" id="accordion">

                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="collapsed">
                                                Стиль менеджмента однородно тормозит эмпирический традиционный канал.
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            Отсюда естественно следует, что узнаваемость марки специфицирует маркетинг. Стоит отметить, что медиапланирование синхронизирует культурный конкурент.
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                                Виджет #2
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse in">
                                        <div class="panel-body">
                                            Отсюда естественно следует, что узнаваемость марки специфицирует маркетинг. Стоит отметить, что медиапланирование синхронизирует культурный конкурент.
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" class="collapsed">
                                                Виджет #3
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            Отсюда естественно следует, что узнаваемость марки специфицирует маркетинг. Стоит отметить, что медиапланирование синхронизирует культурный конкурент.  sony wt19i
                                        </div>
                                    </div>
                                </div>
                            </div><!-- /.panel-group -->
                        </aside><!-- /.accordion-widget -->


                        <aside class="widget widget_tagcloud clearfix">
                            <h3 class="widget-title">
                                Облако Тегов
                            </h3><!-- /.widget-title -->
                            <div class="tag-cloud-wrapper">
                                <a href="#">дизайн</a>
                                <a href="#">html5</a>
                                <a href="#">css3</a>
                                <a href="#">веб-дизайн</a>
                                <a href="#">иллюстрации</a>
                                <a href="#">Photoshop</a>
                                <a href="#">ui/ux</a>
                                <a href="#">js</a>
                                <a href="#">значки</a>
                                <a href="#">статья</a>
                                <a href="#">веб</a>
                                <a href="#">в Дизайне</a>
                            </div><!-- /.tag-cloud-wrapper -->
                        </aside><!-- /.widget -->

                        <aside class="widget widget_dribble">
                            <h3 class="widget-title">
                                Аватары
                            </h3><!-- /.widget-title -->
                            <div class="dribble-shots widget_img">
                                <a href="#"><img src="/images/dribble-shots/dribble-1.png"><span class="overlay"></span></a>
                                <a href="#"><img src="/images/dribble-shots/dribble-2.png"><span class="overlay"></span></a>
                                <a href="#"><img src="/images/dribble-shots/dribble-3.png"><span class="overlay"></span></a>
                                <a href="#"><img src="/images/dribble-shots/dribble-4.png"><span class="overlay"></span></a>
                                <a href="#"><img src="/images/dribble-shots/dribble-5.png"><span class="overlay"></span></a>
                                <a href="#"><img src="/images/dribble-shots/dribble-6.png"><span class="overlay"></span></a>
                                <a href="#"><img src="/images/dribble-shots/dribble-7.png"><span class="overlay"></span></a>
                                <a href="#"><img src="/images/dribble-shots/dribble-8.png"><span class="overlay"></span></a>
                            </div><!-- /.shots -->
                        </aside><!-- /.widget -->

                        <aside class="widget widget_calendar">
                            <div id="calendar_wrap">
                                <table id="wp-calendar">
                                    <caption>Июнь 2015</caption>
                                    <thead>
                                    <tr>
                                        <th scope="col" title="Monday">Пн</th>
                                        <th scope="col" title="Tuesday">Вт</th>
                                        <th scope="col" title="Wednesday">Ср</th>
                                        <th scope="col" title="Thursday">Чт</th>
                                        <th scope="col" title="Friday">Пт</th>
                                        <th scope="col" title="Saturday">Сб</th>
                                        <th scope="col" title="Sunday">Вс</th>
                                    </tr>
                                    </thead>

                                    <tfoot>
                                    <tr>
                                        <td colspan="3" id="prev"><a href="#" title="View posts for February 2015">« Апрель</a></td>
                                        <td class="pad">&nbsp;</td>
                                        <td colspan="3" id="next"><a href="#" title="View posts for Май 2015">Май »</a></td>
                                    </tr>
                                    </tfoot>

                                    <tbody>
                                    <tr>
                                        <td colspan="5" class="pad">&nbsp;</td>
                                        <td>1</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td><a href="#" title="Post title goes here">7</a></td>
                                        <td>8</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>13</td>
                                        <td>14</td>
                                        <td><a href="#" title="Post title goes here">17</a></td>
                                        <td>16</td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>18</td>
                                        <td><a href="#" title="Post title goes here">21</a></td>
                                        <td>20</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td>23</td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" title="Post title goes here">28</a></td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>28</td>
                                        <td>29</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>31</td>
                                        <td class="pad" colspan="6">&nbsp;</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div><!-- /.calendar_wrap -->
                        </aside><!-- /.widget -->

                        <aside class="widget widget_archive">
                            <h3 class="widget-title">
                                Архивы
                            </h3><!-- /.widget-title -->
                            <ul>
                                <li><a href="#">Май 2015</a></li>
                                <li><a href="#">Апрель 2015</a></li>
                                <li><a href="#">Март 2015</a></li>
                            </ul>
                        </aside><!-- /.widget -->
                    </div><!-- /.blog-sidebar -->

                </div><!-- /#blog-sidebar /.col-md-4 -->
                <!-- Side Bar End -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </div><!-- /#blog-page -->
</template>




<script setup lang="ts">

interface BlogItem {
  Id: number,
  Title: string,
  Description: string,
  Thumbnail: string,
  Date: string,
  Author: string,
  CommentsNum: number,
  TagLinks: string[]
}


const blogItems: BlogItem[] = [
  {
    Id: 1,
    Title: "Проблема очковых медведей в геополитике Гватемалы",
    Description: "Перераспределение бюджета, на первый взгляд, притягивает SWOT-анализ. Маркетинг недостаточно отражает типичный социальный статус, повышая конкуренцию. Отсюда естественно следует, что узнаваемость марки специфицирует маркетинг.",
    Thumbnail: "/images/blog-post/blog-post-2.jpg",
    Date: "Май 22",
    Author: "Артём Дзюба",
    CommentsNum: 32,
    TagLinks: ["Футбол", "Дрочка"]
  },
  {
    Id: 2,
    Title: "Универсальный еблан или РосПилМониторинг",
    Description: "Перераспределение бюджета, на первый взгляд, притягивает SWOT-анализ. Маркетинг недостаточно отражает типичный социальный статус, повышая конкуренцию. Отсюда естественно следует, что узнаваемость марки специфицирует маркетинг.",
    Thumbnail: "/images/blog-post/blog-post-3.jpg",
    Date: "Май 28",
    Author: "Артемий Лебедев",
    CommentsNum: 2,
    TagLinks: ["Дизайн", "Волосы"]
  },
  {
    Id: 3,
    Title: "Как пропатчить KDE под FREE BSD",
    Description: "Перераспределение бюджета, на первый взгляд, притягивает SWOT-анализ. Маркетинг недостаточно отражает типичный социальный статус, повышая конкуренцию. Отсюда естественно следует, что узнаваемость марки специфицирует маркетинг.",
    Thumbnail: "/images/blog-post/blog-post-2.jpg",
    Date: "Июнь 16",
    Author: "Хуй Сгоры",
    CommentsNum: 4,
    TagLinks: ["Хуи", "Горы"]
  },
  {
    Id: 4,
    Title: "Smells Like Teen Spirit",
    Description: "Перераспределение бюджета, на первый взгляд, притягивает SWOT-анализ. Маркетинг недостаточно отражает типичный социальный статус, повышая конкуренцию. Отсюда естественно следует, что узнаваемость марки специфицирует маркетинг.",
    Thumbnail: "/images/blog-post/blog-post-3.jpg",
    Date: "Июль 19",
    Author: "Курт Кобейн",
    CommentsNum: 27,
    TagLinks: ["Панк", "Рок"]
  },
]

definePageMeta({
    layout: 'pages' // Указываем кастомный макет
});

</script>
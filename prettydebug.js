/*
	Prety debug for node v0.1
*/

var exports = module.exports = {};
var icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAFQklEQVR4nGJgoDEAAAAA//9iJFbhJYfA+Z/lpCL+sTBz8D56vsFgz+pAYvQBAAAA//9iIUbRVQvP2i9GOgkqhnoMjH//Mjy5fS/g0p8/8/UOrE8kpBcAAAD//2IipOCeopn4BzWlKil1VQb2tx8YWN99ZJBSVWL4rKGccEfNWpeQfgAAAAD//yJowRd56Q4uBVkOnj9/Gf59/cbw/9t3Bo5PXxn45WUYPinLTiCkHwAAAP//wmvBHVVr3U+ykhFikhIMDF++QXUwMvz/+o1BREiY4ZuslNNNPadwfGYAAAAA///Ca8FHJZkJvKpKHJy/fjP8//GDgYGRkYGBgZHh/58/DOxfvzEIK8oxfFCUacBnBgAAAP//wmnBHVUr3S8yEk6ifHwM/99+YLjw7AnDxScPGRj+/2dg+PeP4d/7DwzCXNwMPyVFNW7oOuL0BQAAAP//wmnBKw2lVYLSkgwcHz8z/P/5i4Hh718Gh6k9DIJVeQz///5jYPj9h4H57QcGcXk5hlcaStNwmQMAAAD//8JqwXUdx/Cf4sIaYhycDH/ffWBg+POH4f+fPwgFv34x/P/zh+Hf+w8Mgr//MDCKiwhdNnWrxWYWAAAA///CasErJekeYUkJBuY37xn+/fjJ8O/3b4Z/v37D5f/9/MXw79dvhn+//zAwvP3AIC4izPBKQabqnqKZOLpZAAAAAP//wrDgvJFL3U9xERmhn38Yfr55y/D71y+G39+/M3D8/YfwwNevDL+/f2f4/fMnw6/3Hxh4Pn9jYBIT5ngjIdKJbh4AAAD//0Kx4K6CqfgTKZECIT5ehr+v3zD8+vETYsj3Hwy/f/xgeHPxCsSCb98Zfv/4wfD71y+GXz9/Mvx89YZBhIeH4YWkSPhNZUs9ZDMBAAAA//9CKSqeiQp2M4qKCAp8/cHw/fVbBgYmJgZGZmaG/wz/GX5//8HA8P8/w/crNxh+fv2K0PTvPwPDl68MXGysDOyiwhyPJd5OZLjL4AiTBgAAAP//gvvgjryJ+CMh3lBhLk6GH0+fM/z8/p3h148fDD+/fWX49e0bw89v3xj+/f3L8PfvX4Zf374h8PfvDD9//GD4+vQ5gzAzK8MzYV6HK6qWLjBzAQAAAP//TNSxCYAwEEDRn7Pw0khQkEzgyA6RiQJOoBaiGLCJsVNHeM17BdG3oe47tdtBWlaMVCBfth5BjXDnzHX+BAAFSkrobGmcI/p9ZGIAeAAAAP//YmRgYGC4pmSmf0BV6oKWmCQD6617DH+//2BgYGSA5lyoD79/YWBgYGBQ4eRBj0cGRqglDKwsDMyaqgyX3r5iMLn7PMbk5rGlAAAAAP//YmFgYGC4JMyzkIubh4Hl+UuGL2/eQnWhVhU/f35nSLx8jIGJgZFhv4kzhiUM//8zMDAwMHA+esIgICHCcEnoUzcDA8NSAAAAAP//Yjmlah5ziJdTX+fff4YPj54w/P3xA1MzAwODFAMjA+N/Bob/DP8Zfnz/jlUNAwMDw69HTxhEuDgZLvNxS+7XsGoGAAAA//9inGVkd5dBUlxJ6sVbhm+Pn+LUSApgFxdl+KggxfDm5auPAAAAAP//YnnCyqhkwsrG8OnFC4a///8R1k0E+P36DYOQvAzDQ24ufgAAAAD//yTHMQrDQBAEweZmzGEc+z9K/P+XGJTIILSzVnBRUZ7Nebye8/3ZsM2QkYQeZkjIZlhI6wCd0B1SRVdIhaToa5kUv4T//uUGAAD//2Ix/vCt/+DVK0U/GRjZqOJ8JGD/7c9MAAAAAP//oraZGAAAAAD//wMAWWvIu3cwI6sAAAAASUVORK5CYII=';
var icon = 'testicon';
var style = 'img.prettydebug:after { content: attr(title) }';
// TODO add proper styling
// :hover:after {
// 	content: attr(title);
// 	display: block;
// 	padding: 7px 15px;
// 	position: absolute;
// 	text-align: left;
// 	right: 0px;
// 	top: 0;
// 	background-color: #fff;
// 	z-index: 10;
// 	box-shadow: 2px 2px 3px rgba(0,0,0,0.5);
// 	border: 1px solid #ddd;
// 	color: #c00;
// 	font-family: 'comic sans', arial;
// }

exports.debug = function(message){
	return '<img class="prettydebug" src="' + icon + '" title="'+message+'" />';
};

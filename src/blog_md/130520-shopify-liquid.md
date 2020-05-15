## **Shopify**自有的liquid模板语法

### 在`<script>`中使用liquid
+ 可以通过字符串的形式获取liquid对象，如`"{{product.variants | json }}"`
+ 当需要把liquid对象转换成JS对象时，需要用`json` filter，如`let a = {{ product.variants | json }}`，若忽略`json` filter，会报错
+ 可以使用liquid语法，如forloop等，如
```js
{% for variant in product.variants %}
console.log("{{ variant.options[0] | handleize}}"); // can be obtained via string
modelLabels = $('label[for="swatch-0-'+"{{ variant.options[0] | handleize}}"+'"]');
console.log('dom elements--',modelLabels);
{% endfor %}
```
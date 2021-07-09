import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="SAMPLE COMPANY" />   
        <nav>
        <ul>
        <li><a href="#New">What's New</a></li>
        <li><a href="#company">Company</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#contact">contact</a></li>
        </ul>
  </nav>
  </h1>
</header>

<main>
  <section id="New">
   <h2>What's New</h2>
   <dl>
       <dt>2020/09/27</dt>
       <dd>初心者向け無料ホームページテンプレートtp_beginner6公開。</dd>
       <dt>20xx/00/00</dt>
       <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
       <dt>20xx/00/00</dt>
       <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
       <dt>20xx/00/00</dt>
       <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
       <dt>20xx/00/00</dt>
       <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
       <dt>20xx/00/00</dt>
       <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
       <dt>20xx/00/00</dt>
       <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
     </dl>   
  </section>

  <section id="company">
      <h2>Company</h2>
<h3>会社概要</h3>
<h4>見出しが必要であればここを使います</h4>
<table>
<tr>
<th>見出し</th>
<td>ここに説明など入れてください。サンプルテキスト。</td>
</tr>
    <tr>
    <th>見出し</th>
    <td>ここに説明など入れてください。サンプルテキスト。</td>
    </tr>
    <tr>
    <th>見出し</th>
    <td>ここに説明など入れてください。サンプルテキスト。</td>
    </tr>
    <tr>
    <th>見出し</th>
    <td>ここに説明など入れてください。サンプルテキスト。</td>
    </tr>
    <tr>
    <th>見出し</th>
    <td>ここに説明など入れてください。サンプルテキスト。</td>
    </tr>
    <tr>
    <th>見出し</th>
    <td>ここに説明など入れてください。サンプルテキスト。</td>
    </tr>
</table>
</section>

<section>
    <h2>当テンプレートについて</h2>
    <article>
        <h3>当テンプレートはhtml5+css3\(レスポンシブWEBデザイン\)です</h3>
        <p>当テンプレートは、パソコン、スマホ、タブレットでhtml共通のレスポンシブWEBデザインになっております。
        古いブラウザ（※特にIE8以下）で閲覧した場合はCSSの一部が適応されない（角を丸くする設定など）のでご注意下さい。</p>
    </article>
    <article>
        <h3>各デバイスごとのレイアウトチェックは</h3>
        <p>最終的なチェックは実際のタブレットやスマホで行うのがおすすめですが、臨時チェックは最新のブラウザ（IEならIE10以降）で行う事もできます。ブラウザの幅を狭くしていくと、各端末サイズに合わせたレイアウトになります。</p>
    </article>
    <article>
        <h3>各デバイス用のスタイル変更は</h3>
        <p>cssフォルダのstyle.cssファイルで行ってください。詳しい説明も入っています。
        前半はパソコン環境を含めた全端末の共通設定になります。中盤以降、各端末向けのスタイルが追加設定されています。
    media="~"の「〜」部分でcssを切り替えるディスプレイのサイズを設定しています。ここは必要に応じて変更も可能です。</p>
    </article>
</section>

<section>
    <h2>当テンプレートの使い方</h2>
    <h3>初心者向けマニュアル公開中</h3>
    <p>テンプレートの編集方法、画像加工、無料サーバーを使ってサイトを公開するなど動画をまじえてわかりやすく解説しています。</p>
<a href="https://template-party.com/file/">初心者向けマニュアルはこちら。</a>
<h3>titleタグ、copyright、metaタグ、他の設定</h3>
<em>■titleタグの設定はとても重要です。念入りにワードを選んで適切に入力しましょう。</em>
    まず、htmlソースが見れる状態にして、上から6行目あたりにある、
    <span class="box">&lt;title&gt;初心者向けホームページテンプレート　tp_beginnner6&lt;/title&gt;</span>
    を編集しましょう。
    あなたのホームページ名が「SAMPLE CAMPANY」だとすれば、
    <span class="box">&lt;title&gt;SAMPLE COMPANY&lt;/title&gt;</span>
    とすればOKです。
    
    <em>■copyrightを変更しましょう。</em>
続いてhtmlの下の方にある、
<span class="box">Copyright&copy; SAMPLE COMPANY All Rights Reserved.</span>
の「SAMPLE CAMPANY」部分もあなたのサイト名に変更します。

<em>■metaタグを変更しましょう。</em>
htmlソースの上の方に、
<span class="box">contact="ここにサイト説明を入れます"</span>
という部分がありますので、あなたのサイト説明文に入れ替えます。検索結果の文面に使われている場合もありますので、見た人が来訪したくなるような説明文を簡潔に書きましょう。

続いて、その下の行の
<span class="box">content="キーワード１,キーワード２,~~~"</span>
も設定します。ここはサイトに関係のあるキーワードを入れる箇所です。10個前後ぐらいあれば充分です。キーワード間はカンマ「,」で区切ります。

<em>■ロゴ画像のalt指定と、ロゴ画像本体も変更しましょう。</em>
html側に
<span class="box">&lt;img src="images/logo.png" alt="SAMPLE COMPANY"&gt;</span>
となっている箇所があるので、ここのalt指定（SAMPLE COMPANY）もあなたのサイト名に変更しましょう。

ロゴ画像本体については、baseフォルダに文字なしの土台画像「logo.png」が入っているので、画像ソフトなどを使ってあなたのサイト名を入れて、imagesフォルダに上書きしましょう。画像ソフトを使った画像の加工方法も<a href="https://template-party.com/file/">初心者向けマニュアル</a>で公開中です。
このロゴ画像、HPで見るサイズよりかなり大きく感じると思いますが、高解像度の端末でピンボケさせない為に適当に大きくしてあります。

HPで見る場合のロゴのサイズは、cssフォルダのstle.cssの
<span class="box">/*ヘッダー（ロゴが入った最上階のブロック）</span>
のブロックで指定されている、
<span class="box">header #logo img</span>
にあるwidthの値で変更可能です。css下の方に小さな端末用の設定がある場合もあるのでそちらも確認して下さい。

<h3>リンクの指定方法</h3>
<p>当テンプレートは１枚のhtmlファイルで完結しています。メインメニューのリンクは、同一ページ内に対して行う必要があります。
同一ページ内にリンクを指定したい場合、まず、リンク先の対象ブロックの先頭にid値をつけてあげます。

このテンプレートであれば、Companyのブロック冒頭に、
<span class="box">&lt;section <span class="color">id="company"</span>&gt;</span>
とつけていますが、それです。idは同じ名前で付けられないので注意して下さい。

メニューの方は、
<span class="box">&lt;a href="<span class="color">#company</span>"&gt;Conpany&lt;/a&gt;</span>
として下さい。ここの「#」と「id」は同じ意味で、メニューをクリックすると、id="company"とついた所に移動します。
</p>

<article>
    <h3>最上部の大きなメイン画像を入れ替えたい場合（※tp_beginner6_photo1~tp_beginner6_photo4の場合）</h3>
</article>
<p>入れ替えたい画像を用意し、画像ファイル名を「mainimg,jpg」にしてimagesフォルダに上書きして下さい。閲覧する画面サイズによって自動で切り取られますので、切り取られた際に配置がおかしく見えないような画像を使って下さい。

もし、画像の拡張子が「.jpg」になっていない場合、cssフォルダのstyle.cssの、
<span class="box">header</span>
    の中にある、
    <span class="box">backgraund: url(../images/mainimg.jpg)~~</span>
    部分の「mainimg.jpg」部分を直接変更して下さい。
</p>

    <h3>リストタグを使いたい場合の注意点</h3>
<p>そのままではリストマークが出ませんので、リストタグを使う場合は以下のようなスタイルを追加して下さい。</p><br/>

<ul>
    <li>&lt;ul <span class="color">class="disc"</span>&gt;</li>
    <li>&lt;li&gt;リストタグ&lt;/li&gt;</li>
    <li>&lt;li&gt;リストタグ&lt;/li&gt;</li>
    <li>&lt;li&gt;リストタグ&lt;/li&gt;</li>
    <li>&lt;ul&gt;</li>
    
    <li>↓出力例</li>
    
    <li>・リストタグ</li>
    <li>・リストタグ</li>
    <li>・リストタグ</li>
    
    <li>１、olタグはそのままです。</li>
    <li>２、olタグはそのままです。</li>
    <li>３、olタグはそのままです。</li>
    <li>４、olタグはそのままです。</li>
    </ul>

    <h3>その他、テンプレートのカラーやデザイン変更などは</h3>
   <p>cssフォルダのstyle.cssで行って下さい。詳しい解説も書いています。
    css解説は、「<span class="color">/*</span>」と「<span class="color">*/</span>」の間にコメントして入れます。「<span class="color">/*</span>」と「<span class="color">*/</span>」はcss用のコメントタグであり、飾りではないので削除しないで下さい。もし解説を削除したい場合は、「<span class="color">/*</span>」と「<span class="color">*/</span>」含めて丸ごと削除して下さい。</p>
    <h3>うまく編集出来ない場合は</h3>
    <p><a href="https://template-party.com/bbs/">サポート掲示板</a>からご質問下さい。対応可能な範囲内でサポートしております。</p>
<p />
</section>

<section id="service">
    <h2>Service</h2>
    <div className="slider">
    <div className="image1">
    <img src="./images/sample1.jpg" />
    <div class="text1">
    <h5>ここの見出しのサイズは、cssフォルダのstyle.cssの「.list h4」で変更できます。</h5>
    <p>左の画像の幅もstyle.cssの「.list img」のwidthの数字で変更できます。</p>
    </div>
    </div>
    <div className="image1">
    <img src="./images/sample2.jpg" />
    <div className="text1">
    <h5>見出しを入れます</h5>
    <p>説明を入れます</p>
    </div>
    </div>
    <div className="image1">
    <img src="./images/sample3.jpg" />
    <div className="text1">
    <h5>見出しを入れます</h5>
    <p>説明を入れます</p>
    </div>
    </div>
    <div className="image1">
    <img src="./images/sample4.jpg" />
    <div class="text1">
    <h5>見出しを入れます</h5>
    <p>説明を入れます</p>
    </div>
    </div>
    <div className="image1">
    <img src="./images/sample5.jpg" />
    <div className="text1">
    <h5>見出しを入れます</h5>
    <p>説明を入れます</p>
    </div>
    </div>
    </div>
</section>

<section id="contact">
    <h2>Contact</h2>
    <div>
        <p>お問い合わせは以下までお願い致します。</p>
    <h6>03-0000-0000</h6>
    
    <p>定休日：毎週土日
    営業時間AM9:00〜PM6:00
</p>
<span className="image2">
    <img src="./images/sample1.jpg" />
    </span>
    </div>
</section>
<div id="page_top"><a href="#">↑</a></div>
</main>

</div>
);
};

export default App;

<template>
	<div class="home">
		<div class="wrap">
			<div class="header">
				<!-- <div class="header__menu">
          <img src="@/assets/menu.png" alt="" />
        </div> -->
				<div class="header__title">
					<h3>醫療好評網</h3>
				</div>
				<Popup
					class="searchDialog"
					:showDialog="showSearchDialog"
					:cancel="cancel"
				>
					<div class="content">
                          <!-- <input type="range" name="" id="" min="10" max="100" step="any"> -->
						<form>
							<i class="searchIcon"
								><img src="@/assets/search.png" alt=""
							/></i>
							<custom-select
								:class="[
									isOptionShow ? 'optionShow' : 'optionHide',
								]"
								:optionShow="optionShow"
								:selectedValue="selectedValue"
								:optionList="optionList"
								:selectedOption="selectedOption"
								:placeholder="placeholderTxt"
							/>
							<i class="down"
								><img src="@/assets/Stroke.png" alt=""
							/></i>
							<h3 class="temptxt">search</h3>
							<i class="placeIcon"
								><img src="@/assets/place.png" alt=""
							/></i>
						</form>
					</div>
				</Popup>
				<div class="header__search" @click="search__box">
					<div class="sub1">O</div>
					<div class="sub1__line"></div>
					<div class="sub2">PEN</div>
				</div>
				<a class="scroll__btn" href="#subtitle">
					<img src="@/assets/nextPage.png" alt="" />
				</a>
				<div class="header__subtitle" id="subtitle">
					<h3>醫療好評網</h3>
					<h4>
						給您的安心有保障的醫療評價資訊，
						<br />簡單明瞭、方便操作 。
					</h4>
				</div>
			</div>
		</div>
		<div class="content1">
			<div class="content1__title">
				<h3>你有這些困擾嗎?</h3>
			</div>
			<div class="content1__range range1">
				<div class="content1__box">
					<div class="content1_background">
						<img src="@/assets/Union.svg" alt="" />
					</div>
					<div class="content1__box__img">
						<img src="@/assets/thunder.png" alt="" />
					</div>
					<h3>臨時找醫院，<br />妳怕雷嗎?</h3>
				</div>
				<div class="content1__box">
					<div class="content1_background">
						<img src="@/assets/Union.svg" alt="" />
					</div>
					<div class="content1__box__img">
						<img src="@/assets/talk.png" alt="" />
					</div>
					<h3>道聽塗說是不是你<br />求醫的唯一參考?</h3>
				</div>
			</div>
			<div class="content1__range range2">
				<div class="content1__box">
					<div class="content1_background">
						<img src="@/assets/Union.svg" alt="" />
					</div>
					<div class="content1__box__img">
						<img src="@/assets/time.png" alt="" />
					</div>
					<h3>怕花太多時間尋找<br />妳心中的良醫嗎?</h3>
				</div>
				<div class="content1__box">
					<div class="content1_background">
						<img src="@/assets/Union.svg" alt="" />
					</div>
					<div class="content1__box__img">
						<img src="@/assets/layout.png" alt="" />
					</div>
					<h3>版面太雜，使用<br />起來霧煞煞嗎？</h3>
				</div>
			</div>
			<div class="content1__subbox">
				<div class="content1__subbox_background">
					<img src="@/assets/Rectangle 23.svg" alt="" />
				</div>
				<div class="content1__subbox__img">
					<img src="@/assets/trust.png" alt="" />
				</div>
				<h3>
					面對意外，<br />你需要的是快速精準的醫療資訊，<br />
					而不是片面之詞的傳言，<br />讓我們為你找到值得信賴的醫療機構。
				</h3>
			</div>
		</div>
		<div class="content2">
			<img
				class="content2__background"
				src="@/assets/solotion.svg"
				alt=""
			/>
			<h2>不用擔心，<br />我們就是你的避雷針。</h2>
			<div class="content2__box box1">
				<img src="@/assets/Rectangle 28.svg" alt="" />
				<h3>找醫生</h3>
			</div>
			<div class="content2__box box2">
				<img src="@/assets/Rectangle 28.svg" alt="" />
				<h3>找科別</h3>
			</div>
			<div class="content2__box box3">
				<img src="@/assets/Rectangle 28.svg" alt="" />
				<h3>找醫療機構</h3>
			</div>
			<div class="content2__box box4">
				<img src="@/assets/Rectangle 28.svg" alt="" />
				<h3>找疾病</h3>
			</div>
		</div>
		<div class="content3">
			<div class="content3__boxflex">
				<div class="content3__box box1">
					<div class="title">各種方式搜尋醫療機構</div>
					<div class="sub">
						<h3>
							依照科別和疾病搜尋，<br />選擇最適合您的醫療機構。
						</h3>
					</div>
				</div>
				<div class="content3__box box2">
					<div class="title">民眾評分機制</div>
					<div class="sub">
						<h3>
							以連續性評分數據，精準性提高，<br />讓你輕鬆找到最適合的良醫。
						</h3>
					</div>
				</div>
				<div class="content3__box box3">
					<div class="title">評論機制，雙向溝通</div>
					<div class="sub">
						<h3>
							透過民眾留言方式，<br />醫師幫助您解決心中的困惑。
						</h3>
					</div>
				</div>
				<div class="content3__box box4">
					<div class="title">統整醫療院所數據</div>
					<div class="sub">
						<h3>
							數據呈現他們的用心良苦，<br />用醫療資訊技術讓你從專業看見醫院的效率。
						</h3>
					</div>
				</div>
				<div class="content3__box box5">
					<div class="title">版面經過設計思考</div>
					<div class="sub">
						<h3>
							有設計邏輯的介面讓你全方位，<br />快速，精準的選擇。
						</h3>
					</div>
				</div>
			</div>
			<div class="content3__decoration">
				<div class="content3__title">
					<h3>服務項目</h3>
				</div>
			</div>
			<div class="content3__subbox">
				<div class="content3__subbox__img top">
					<img src="@/assets/upperQuotation.svg" alt="" />
				</div>
				<h3 class="one">
					醫療好評網提供您一目瞭然的資訊呈現，採用獨家搜尋引擎，
				</h3>
				<h3 class="two">
					結合Big Data的跨時代科技，助你精準找到最佳良醫。
				</h3>
				<div class="content3__subbox__img bottom">
					<img src="@/assets/lowerQuotation.svg" alt="" />
				</div>
			</div>
		</div>
		<div class="content4">
			<div class="content4__header">
				<img src="@/assets/chatIcon.svg" alt="" />
				<h3>來自各地的支持</h3>
			</div>
			<div class="content4__main">
        <div class="message__area"> 
          <div class="message" v-for="message in messages" :key="message.id">
            <img src="@/assets/chatUnion.svg" alt="">
            <h3>{{ message.content }}</h3>
          </div>
        </div>
			</div>
      <div class="content4__input">
          <input type="text" placeholder="留言區" v-model="messageInput" maxlength="80">
          <button @click="sendMessage">發&emsp;送</button>
      </div>
		</div>
		<div class="footer">
			<div class="sub1">
				<h3>網站地圖</h3>
				<ul>
					<li>
						粉絲專頁<span>
							&nbsp; &nbsp; &nbsp;醫療好評網@Facebook</span
						>
					</li>
					<li>
						客服專線<span>
							&nbsp; &nbsp; &nbsp;(02) &nbsp;2905-2000</span
						>
					</li>
					<li>工作團隊</li>
				</ul>
			</div>
			<div class="sub2">
				<div class="sub2__flex">
					<h3 class="copy">©&thinsp; 2021&thinsp; 醫療好評網</h3>
					<h3 class="private">隱私政策</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Popup from "@/components/Popup/index.vue";
import CustomSelect from "@/components/Select/index.vue";
import { mapState, mapActions } from "vuex";

export default {
	data() {
		return {
			showSearchDialog: false,
			selectValue: "",
			isOptionShow: false,
			selectedValue: "",
			optionList: ["科別", "醫院"],
			placeholderTxt: "請選擇",
			parmData: "",
      messageInput: ""
		};
	},
	components: {
		Popup,
		CustomSelect,
	},
  mounted() {
    this.messagesInit();
	//this.passLocation();
  },
  computed: {
    ...mapState(['messages'])
  },
	methods: {
		...mapActions([
      "searchType",
      "messagesInit",
      "messageSend",'passLocation']),
		search__box() {
			this.showSearchDialog = true;
		},
		cancel() {
			this.showSearchDialog = false;
		},
		search(event) {
			this.searchType(event.target.value);
			this.$router.push("/search");
			this.showSearchDialog = false;
		},
		selectedOption(value) {
			this.selectedValue = value;
			this.isOptionShow = false;
			this.placeholderTxt = "";
			if (value === "科別") {
				this.parmData = "doctor";
			} else {
				this.parmData = "hospital";
			}

			this.searchType(this.parmData);
			this.$router.push("/search");
			this.showSearchDialog = false;
		},
		optionShow() {
			this.isOptionShow = this.isOptionShow ? false : true;
		},
    sendMessage(e) {
      e.preventDefault();
      this.messageSend(this.messageInput)
      this.messageInput = ""
    }
	},
};
</script>

<style type="text/css" src="@/assets/style.css"></style>

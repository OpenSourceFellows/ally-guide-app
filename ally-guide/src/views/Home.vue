<template>
	<div class="Home">
		<div class="buffer"></div>
		<div style="padding-left:150px; padding-right:150px;padding-bottom:50px;">
			 <h1> Ally.Guide</h1>
			 <h4> Wherever you're starting from in your allyship towards racial justice, we help you be consistent. </h4>
		</div>
		<div
			style="background-image: linear-gradient(90deg, #892819, black);"
			class="tiles border-bottom border-white"
		>
			<!-- <h1 class="message-title">Black Lives Matter.</h1> -->
			<div class="text-center" >
				<div class="action-div a text-center">
					<a class="elevate" href="/elevate">
						<div class="h-title">Communicate</div>

						<div class="h-img" style="padding-top: 200px;"" ></div>
					</a>
				</div>
				<div class="action-div b">
					<a class="distribute" href="/contribute">
						<div class="h-title">Circulate</div>

						<div class="h-img"></div>
					</a>
				</div>
				<div class="action-div c">
					<a class="educate" href="/educate">
						<div class="h-title">Educate</div>

						<div class="h-img"></div>
					</a>
				</div>
				<div class="action-div d">
					<a class="collaborate" href="/collaborate">
						<div class="h-title">Elevate</div>

						<div class="h-img"></div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Home",
		components: {}
	};
</script>

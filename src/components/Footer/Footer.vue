<template>
  <footer>
    <nav>
      <ul>
        <li @click="navigateTo('/')" :class="{ active: currentRoute === '/' }">
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16.395V6.79061C0 6.50773 0.069619 6.23996 0.208857 5.98729C0.348095 5.73462 0.539952 5.52652 0.784428 5.36298L7.32336 0.856907C7.66579 0.618969 8.05679 0.5 8.49636 0.5C8.93593 0.5 9.32936 0.618969 9.67664 0.856907L16.2156 5.36188C16.4609 5.52541 16.6527 5.73389 16.7911 5.98729C16.9304 6.23996 17 6.50773 17 6.79061V16.395C17 16.6912 16.879 16.9494 16.6369 17.1696C16.3949 17.3899 16.1111 17.5 15.7857 17.5H11.6766C11.3981 17.5 11.165 17.4145 10.9771 17.2436C10.7893 17.072 10.6954 16.8599 10.6954 16.6072V11.3376C10.6954 11.0849 10.6015 10.8731 10.4137 10.7022C10.2251 10.5306 9.99195 10.4448 9.71429 10.4448H7.28571C7.00805 10.4448 6.77531 10.5306 6.5875 10.7022C6.39888 10.8731 6.30457 11.0849 6.30457 11.3376V16.6083C6.30457 16.861 6.21067 17.0727 6.02286 17.2436C5.83505 17.4145 5.60231 17.5 5.32464 17.5H1.21429C0.888857 17.5 0.605119 17.3899 0.363071 17.1696C0.121024 16.9494 0 16.6912 0 16.395Z"
              :fill="currentRoute === '/' ? '#000000' : '#757575'"
            />
          </svg>
          <span :style="{ color: currentRoute === '/' ? '#000000' : '#757575' }"
            >Home</span
          >
        </li>
        <li
          @click="navigateTo('/market')"
          :class="{ active: currentRoute === '/market' }"
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 8.2H5.5V14.5H1.5V8.2ZM8.5 5.5H12.5V17.2H8.5V5.5Z"
              :fill="currentRoute === '/market' ? '#000000' : '#757575'"
              :stroke="currentRoute === '/market' ? '#000000' : '#757575'"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 19V17.2V19Z"
              :fill="currentRoute === '/market' ? '#000000' : '#757575'"
            />
            <path
              d="M10.5 19V17.2"
              :stroke="currentRoute === '/market' ? '#000000' : '#757575'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5 4.59998H19.5V8.64998H15.5V4.59998Z"
              :fill="currentRoute === '/market' ? '#000000' : '#757575'"
              :stroke="currentRoute === '/market' ? '#000000' : '#757575'"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 8.2V3.7V8.2ZM17.5 14.5V8.65V14.5ZM17.5 4.6V1V4.6Z"
              :fill="currentRoute === '/market' ? '#000000' : '#757575'"
            />
            <path
              d="M3.5 8.2V3.7M17.5 14.5V8.65M17.5 4.6V1"
              :stroke="currentRoute === '/market' ? '#000000' : '#757575'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span
            :style="{
              color: currentRoute === '/market' ? '#000000' : '#757575',
            }"
            >Market</span
          >
        </li>
        <li :class="{ active: currentRoute === '/profile' }">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.5 4C5.5 2.93913 5.92143 1.92172 6.67157 1.17157C7.42172 0.421427 8.43913 0 9.5 0C10.5609 0 11.5783 0.421427 12.3284 1.17157C13.0786 1.92172 13.5 2.93913 13.5 4C13.5 5.06087 13.0786 6.07828 12.3284 6.82843C11.5783 7.57857 10.5609 8 9.5 8C8.43913 8 7.42172 7.57857 6.67157 6.82843C5.92143 6.07828 5.5 5.06087 5.5 4ZM5.5 10C4.17392 10 2.90215 10.5268 1.96447 11.4645C1.02678 12.4021 0.5 13.6739 0.5 15C0.5 15.7956 0.816071 16.5587 1.37868 17.1213C1.94129 17.6839 2.70435 18 3.5 18H15.5C16.2956 18 17.0587 17.6839 17.6213 17.1213C18.1839 16.5587 18.5 15.7956 18.5 15C18.5 13.6739 17.9732 12.4021 17.0355 11.4645C16.0979 10.5268 14.8261 10 13.5 10H5.5Z"
              :fill="currentRoute === '/profile' ? '#000000' : '#757575'"
            />
          </svg>
          <span
            :style="{
              color: currentRoute === '/profile' ? '#000000' : '#757575',
            }"
            >Profile</span
          >
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const currentRoute = route.path;

const navigateTo = (page) => {
  router.push(page);
};
</script>

<style scoped>
footer {
  border-radius: 20px;
  padding: 15px 30px 10px 30px;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 65px;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
}

span {
  font-weight: 500;
  font-size: 14px;
}

li.active span {
  font-weight: 600;
}
</style>

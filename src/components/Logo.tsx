const Logo = (props: { className: string }) => {
    return (
        <svg width="127" height="47" viewBox="0 0 127 47" {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="M18.656 8.6186C18.656 10.8185 18.216 12.7209 17.336 14.3255C16.456 15.9043 15.1727 17.0431 13.486 17.7419C14.3953 18.1819 15.0847 18.9066 15.554 19.916C16.0233 20.8995 16.258 22.0383 16.258 23.3323C16.258 25.377 15.8913 27.1499 15.158 28.651C14.4393 30.1522 13.3833 31.3169 11.99 32.1451C10.5967 32.9474 8.91733 33.3486 6.952 33.3486C6.21867 33.3486 5.632 33.3097 5.192 33.2321C5.17733 33.9568 5.00133 34.5003 4.664 34.8626C4.32667 35.225 3.894 35.4062 3.366 35.4062C2.838 35.4062 2.47133 35.1991 2.266 34.785C2.07533 34.3709 1.99467 33.7627 2.024 32.9603C2.156 29.3369 2.41267 25.5452 2.794 21.5853C3.17533 17.5996 3.65933 13.7561 4.246 10.055C4.34867 9.408 4.554 8.95507 4.862 8.69625C5.17 8.43743 5.57333 8.30802 6.072 8.30802C6.96667 8.30802 7.414 8.74801 7.414 9.62799C7.414 9.99033 7.37 10.4044 7.282 10.8703C6.90067 12.8891 6.51933 15.6325 6.138 19.1007C5.75667 22.543 5.48533 25.8299 5.324 28.9616C6.028 29.0651 6.6 29.1169 7.04 29.1169C9.09333 29.1169 10.5967 28.5993 11.55 27.564C12.518 26.5029 13.002 25.157 13.002 23.5265C13.002 22.3877 12.7233 21.43 12.166 20.6536C11.6233 19.8771 10.7067 19.4501 9.416 19.3724C9.12267 19.3466 8.91733 19.2172 8.8 18.9842C8.68267 18.7513 8.624 18.376 8.624 17.8584C8.624 17.1078 8.712 16.4996 8.888 16.0337C9.064 15.5678 9.38667 15.322 9.856 15.2961C10.8973 15.2443 11.836 14.9726 12.672 14.4808C13.5227 13.9891 14.19 13.3032 14.674 12.4232C15.158 11.5174 15.4 10.4691 15.4 9.27859C15.4 7.77745 14.982 6.59983 14.146 5.74573C13.31 4.86576 12.0267 4.42577 10.296 4.42577C8.72667 4.42577 7.20867 4.78811 5.742 5.5128C4.27533 6.21161 3.02867 7.10452 2.002 8.19156C1.53267 8.68331 1.13667 8.92918 0.814 8.92918C0.55 8.92918 0.344667 8.77389 0.198 8.46331C0.066 8.12685 0 7.71274 0 7.22099C0 6.57395 0.0733333 6.01749 0.22 5.55162C0.381333 5.08575 0.755333 4.55518 1.342 3.9599C2.574 2.71758 4.01867 1.74701 5.676 1.04821C7.33333 0.349402 9.02733 0 10.758 0C13.4127 0 15.3927 0.78939 16.698 2.36817C18.0033 3.94696 18.656 6.03043 18.656 8.6186Z" />
            <path d="M24.3573 33.6591C23.3453 33.6591 22.4286 33.2192 21.6073 32.3392C20.8006 31.4592 20.1626 30.191 19.6933 28.5346C19.2239 26.8523 18.9893 24.8723 18.9893 22.5947C18.9893 18.6607 19.4659 15.0243 20.4193 11.6856C21.3726 8.32096 22.7806 5.62927 24.6433 3.6105C26.5059 1.56584 28.7426 0.543515 31.3533 0.543515C32.0279 0.543515 32.7466 0.634101 33.5093 0.815273C34.2866 0.996444 34.9906 1.2682 35.6213 1.63055C36.0319 1.8376 36.2373 2.35523 36.2373 3.18345C36.2373 3.85637 36.0906 4.49048 35.7973 5.08575C35.5186 5.68103 35.1886 5.97867 34.8073 5.97867C34.6899 5.97867 34.6019 5.96573 34.5433 5.93985C33.7806 5.62927 33.1279 5.40927 32.5853 5.27987C32.0426 5.12457 31.4706 5.04693 30.8693 5.04693C29.0066 5.04693 27.4226 5.84926 26.1173 7.45393C24.8119 9.03271 23.8366 11.1291 23.1913 13.7432C22.5459 16.3572 22.2233 19.1783 22.2233 22.2065C22.2233 24.4064 22.4653 26.1146 22.9493 27.3311C23.4479 28.5216 24.0933 29.1169 24.8853 29.1169C25.7799 29.1169 26.5646 28.4699 27.2393 27.1758C27.9139 25.8817 28.5299 23.7853 29.0873 20.8865C29.6446 17.9878 30.1946 14.0538 30.7373 9.08448C30.8253 8.35979 31.0013 7.86803 31.2653 7.60922C31.5293 7.3504 31.8813 7.22099 32.3213 7.22099C33.3626 7.22099 33.8833 7.81627 33.8833 9.00683C33.8833 9.21388 33.8613 9.4727 33.8173 9.78328C33.4359 12.2938 33.0839 15.0761 32.7613 18.1301C32.4533 21.1583 32.2993 23.4618 32.2993 25.0405C32.2993 26.4381 32.4166 27.4605 32.6513 28.1075C32.8859 28.7287 33.2453 29.0393 33.7293 29.0393C34.1986 29.0393 34.6459 28.7675 35.0713 28.224C35.4966 27.6546 36.0319 26.697 36.6773 25.3511C36.8533 24.9888 37.0513 24.8076 37.2713 24.8076C37.4619 24.8076 37.6086 24.9629 37.7113 25.2735C37.8286 25.5841 37.8873 26.0111 37.8873 26.5546C37.8873 27.564 37.7479 28.3663 37.4693 28.9616C36.7506 30.4886 36.0466 31.6533 35.3573 32.4556C34.6679 33.258 33.8246 33.6591 32.8273 33.6591C31.8006 33.6591 30.9719 33.1415 30.3413 32.1062C29.7106 31.0451 29.3146 29.5569 29.1533 27.6416C28.0679 31.6533 26.4693 33.6591 24.3573 33.6591Z" />
            <path d="M54.5779 8.6186C54.5779 10.8185 54.1379 12.7209 53.2579 14.3255C52.3779 15.9043 51.0945 17.0431 49.4079 17.7419C50.3172 18.1819 51.0065 18.9066 51.4759 19.916C51.9452 20.8995 52.1799 22.0383 52.1799 23.3323C52.1799 25.377 51.8132 27.1499 51.0799 28.651C50.3612 30.1522 49.3052 31.3169 47.9119 32.1451C46.5185 32.9474 44.8392 33.3486 42.8739 33.3486C42.1405 33.3486 41.5539 33.3097 41.1139 33.2321C41.0992 33.9568 40.9232 34.5003 40.5859 34.8626C40.2485 35.225 39.8159 35.4062 39.2879 35.4062C38.7599 35.4062 38.3932 35.1991 38.1879 34.785C37.9972 34.3709 37.9165 33.7627 37.9459 32.9603C38.0779 29.3369 38.3345 25.5452 38.7159 21.5853C39.0972 17.5996 39.5812 13.7561 40.1679 10.055C40.2705 9.408 40.4759 8.95507 40.7839 8.69625C41.0919 8.43743 41.4952 8.30802 41.9939 8.30802C42.8885 8.30802 43.3359 8.74801 43.3359 9.62799C43.3359 9.99033 43.2919 10.4044 43.2039 10.8703C42.8225 12.8891 42.4412 15.6325 42.0599 19.1007C41.6785 22.543 41.4072 25.8299 41.2459 28.9616C41.9499 29.0651 42.5219 29.1169 42.9619 29.1169C45.0152 29.1169 46.5185 28.5993 47.4719 27.564C48.4399 26.5029 48.9239 25.157 48.9239 23.5265C48.9239 22.3877 48.6452 21.43 48.0879 20.6536C47.5452 19.8771 46.6285 19.4501 45.3379 19.3724C45.0445 19.3466 44.8392 19.2172 44.7219 18.9842C44.6045 18.7513 44.5459 18.376 44.5459 17.8584C44.5459 17.1078 44.6339 16.4996 44.8099 16.0337C44.9859 15.5678 45.3085 15.322 45.7779 15.2961C46.8192 15.2443 47.7579 14.9726 48.5939 14.4808C49.4445 13.9891 50.1119 13.3032 50.5959 12.4232C51.0799 11.5174 51.3219 10.4691 51.3219 9.27859C51.3219 7.77745 50.9039 6.59983 50.0679 5.74573C49.2319 4.86576 47.9485 4.42577 46.2179 4.42577C44.6485 4.42577 43.1305 4.78811 41.6639 5.5128C40.1972 6.21161 38.9505 7.10452 37.9239 8.19156C37.4545 8.68331 37.0585 8.92918 36.7359 8.92918C36.4719 8.92918 36.2665 8.77389 36.1199 8.46331C35.9879 8.12685 35.9219 7.71274 35.9219 7.22099C35.9219 6.57395 35.9952 6.01749 36.1419 5.55162C36.3032 5.08575 36.6772 4.55518 37.2639 3.9599C38.4959 2.71758 39.9405 1.74701 41.5979 1.04821C43.2552 0.349402 44.9492 0 46.6799 0C49.3345 0 51.3145 0.78939 52.6199 2.36817C53.9252 3.94696 54.5779 6.03043 54.5779 8.6186Z" />
            <path d="M73.6551 24.7688C73.7431 24.717 73.8751 24.6911 74.0511 24.6911C74.5498 24.6911 74.7991 25.2605 74.7991 26.3993C74.7991 27.0205 74.7185 27.5511 74.5571 27.9911C74.4105 28.4052 74.1758 28.664 73.8531 28.7675C72.5185 29.2075 71.2058 29.6992 69.9151 30.2428L69.8491 31.1745C69.4385 36.2732 68.6171 40.039 67.3851 42.4719C66.1678 44.9306 64.6425 46.16 62.8091 46.16C61.5918 46.16 60.6458 45.6294 59.9711 44.5683C59.3111 43.533 58.9811 42.2001 58.9811 40.5696C58.9811 37.852 59.6705 35.432 61.0491 33.3097C62.4278 31.1874 64.5178 29.311 67.3191 27.6805L67.7591 22.2065C67.8178 21.5853 67.8911 20.7571 67.9791 19.7219C67.2898 22.9312 66.4098 25.3252 65.3391 26.904C64.2685 28.4828 63.0731 29.2722 61.7531 29.2722C60.4918 29.2722 59.5311 28.5993 58.8711 27.2534C58.2111 25.8817 57.8811 24.1217 57.8811 21.9736C57.8811 21.0159 57.9398 19.9677 58.0571 18.8289C58.1745 17.6643 58.3578 16.0984 58.6071 14.1314C58.8271 12.3456 58.9885 10.9221 59.0911 9.86092C59.2085 8.79977 59.2671 7.85509 59.2671 7.02688C59.2671 5.78456 58.9958 5.1634 58.4531 5.1634C58.0278 5.1634 57.5218 5.53868 56.9351 6.28925C56.3631 7.01394 55.7545 8.13979 55.1091 9.66681C54.9038 10.1586 54.6765 10.4044 54.4271 10.4044C54.2218 10.4044 54.0385 10.2362 53.8771 9.89975C53.7305 9.5374 53.6571 9.13624 53.6571 8.69625C53.6571 7.89392 53.8625 6.98806 54.2731 5.97867C55.7691 2.35523 57.5218 0.543515 59.5311 0.543515C60.4258 0.543515 61.1225 1.02233 61.6211 1.97995C62.1345 2.93757 62.3911 4.34812 62.3911 6.21161C62.3911 7.55745 62.3178 8.94213 62.1711 10.3656C62.0391 11.7632 61.8338 13.5491 61.5551 15.7231C61.3791 17.0172 61.2471 18.0654 61.1591 18.8678C61.0711 19.6442 61.0271 20.2912 61.0271 20.8089C61.0271 22.1288 61.1591 23.0735 61.4231 23.6429C61.6871 24.2123 62.1491 24.497 62.8091 24.497C63.6011 24.497 64.4078 23.7335 65.2291 22.2065C66.0651 20.6536 66.8131 18.3113 67.4731 15.1796C68.1478 12.0479 68.6318 8.21744 68.9251 3.68814C68.9985 2.54935 69.1671 1.74701 69.4311 1.28114C69.6951 0.789391 70.0765 0.543515 70.5751 0.543515C71.6018 0.543515 72.1151 1.44937 72.1151 3.26109C72.1151 3.57167 72.1078 3.81755 72.0931 3.99872C71.7851 7.85509 71.4991 11.3362 71.2351 14.442C71.0885 16.3055 70.9271 18.2207 70.7511 20.1877C70.5898 22.1547 70.4285 24.1476 70.2671 26.1664C71.3378 25.6488 72.4671 25.1829 73.6551 24.7688ZM66.9891 31.7568C63.4398 33.9309 61.6651 36.5708 61.6651 39.6766C61.6651 40.4013 61.7898 40.9966 62.0391 41.4625C62.3031 41.9542 62.6698 42.2001 63.1391 42.2001C65.1778 42.2001 66.4538 38.8096 66.9671 32.0286L66.9891 31.7568Z" />
            <path d="M91.488 8.6186C91.488 10.8185 91.048 12.7209 90.168 14.3255C89.288 15.9043 88.0047 17.0431 86.318 17.7419C87.2274 18.1819 87.9167 18.9066 88.386 19.916C88.8554 20.8995 89.09 22.0383 89.09 23.3323C89.09 25.377 88.7234 27.1499 87.99 28.651C87.2714 30.1522 86.2154 31.3169 84.822 32.1451C83.4287 32.9474 81.7494 33.3486 79.784 33.3486C79.0507 33.3486 78.464 33.3097 78.024 33.2321C78.0094 33.9568 77.8334 34.5003 77.496 34.8626C77.1587 35.225 76.726 35.4062 76.198 35.4062C75.67 35.4062 75.3034 35.1991 75.098 34.785C74.9074 34.3709 74.8267 33.7627 74.856 32.9603C74.988 29.3369 75.2447 25.5452 75.626 21.5853C76.0074 17.5996 76.4914 13.7561 77.078 10.055C77.1807 9.408 77.386 8.95507 77.694 8.69625C78.002 8.43743 78.4054 8.30802 78.904 8.30802C79.7987 8.30802 80.246 8.74801 80.246 9.62799C80.246 9.99033 80.202 10.4044 80.114 10.8703C79.7327 12.8891 79.3514 15.6325 78.97 19.1007C78.5887 22.543 78.3174 25.8299 78.156 28.9616C78.86 29.0651 79.432 29.1169 79.872 29.1169C81.9254 29.1169 83.4287 28.5993 84.382 27.564C85.35 26.5029 85.834 25.157 85.834 23.5265C85.834 22.3877 85.5554 21.43 84.998 20.6536C84.4554 19.8771 83.5387 19.4501 82.248 19.3724C81.9547 19.3466 81.7494 19.2172 81.632 18.9842C81.5147 18.7513 81.456 18.376 81.456 17.8584C81.456 17.1078 81.544 16.4996 81.72 16.0337C81.896 15.5678 82.2187 15.322 82.688 15.2961C83.7294 15.2443 84.668 14.9726 85.504 14.4808C86.3547 13.9891 87.022 13.3032 87.506 12.4232C87.99 11.5174 88.232 10.4691 88.232 9.27859C88.232 7.77745 87.814 6.59983 86.978 5.74573C86.142 4.86576 84.8587 4.42577 83.128 4.42577C81.5587 4.42577 80.0407 4.78811 78.574 5.5128C77.1074 6.21161 75.8607 7.10452 74.834 8.19156C74.3647 8.68331 73.9687 8.92918 73.646 8.92918C73.382 8.92918 73.1767 8.77389 73.03 8.46331C72.898 8.12685 72.832 7.71274 72.832 7.22099C72.832 6.57395 72.9054 6.01749 73.052 5.55162C73.2134 5.08575 73.5874 4.55518 74.174 3.9599C75.406 2.71758 76.8507 1.74701 78.508 1.04821C80.1654 0.349402 81.8594 0 83.59 0C86.2447 0 88.2247 0.78939 89.53 2.36817C90.8354 3.94696 91.488 6.03043 91.488 8.6186Z" />
            <path d="M98.9493 33.6591C97.644 33.6591 96.4633 33.1415 95.4073 32.1062C94.366 31.071 93.5373 29.5569 92.9213 27.564C92.3053 25.5452 91.9973 23.1382 91.9973 20.343C91.9973 16.409 92.4006 12.9408 93.2073 9.93857C94.0286 6.93629 95.136 4.61988 96.5293 2.98934C97.9373 1.35879 99.492 0.543515 101.193 0.543515C102.499 0.543515 103.672 1.06115 104.713 2.09642C105.769 3.13168 106.605 4.65871 107.221 6.67748C107.837 8.67037 108.145 11.0644 108.145 13.8596C108.145 17.7937 107.735 21.2618 106.913 24.2641C106.107 27.2664 104.999 29.5828 103.591 31.2133C102.198 32.8439 100.651 33.6591 98.9493 33.6591ZM99.1693 29.0781C100.313 29.0781 101.318 28.4569 102.183 27.2146C103.063 25.9723 103.738 24.2511 104.207 22.0512C104.677 19.8254 104.911 17.3149 104.911 14.5196C104.911 11.4397 104.545 9.11035 103.811 7.53157C103.078 5.92691 102.132 5.12458 100.973 5.12458C99.844 5.12458 98.8466 5.74574 97.9813 6.98806C97.116 8.2045 96.4413 9.92563 95.9573 12.1515C95.4733 14.3514 95.2313 16.8619 95.2313 19.683C95.2313 22.7629 95.598 25.1052 96.3313 26.7099C97.0646 28.2887 98.0106 29.0781 99.1693 29.0781Z" />
            <path d="M116.91 33.6591C115.605 33.6591 114.424 33.1415 113.368 32.1062C112.327 31.071 111.498 29.5569 110.882 27.564C110.266 25.5452 109.958 23.1382 109.958 20.343C109.958 16.409 110.362 12.9408 111.168 9.93857C111.99 6.93629 113.097 4.61988 114.49 2.98934C115.898 1.35879 117.453 0.543515 119.154 0.543515C120.46 0.543515 121.633 1.06115 122.674 2.09642C123.73 3.13168 124.566 4.65871 125.182 6.67748C125.798 8.67037 126.106 11.0644 126.106 13.8596C126.106 17.7937 125.696 21.2618 124.874 24.2641C124.068 27.2664 122.96 29.5828 121.552 31.2133C120.159 32.8439 118.612 33.6591 116.91 33.6591ZM117.13 29.0781C118.274 29.0781 119.279 28.4569 120.144 27.2146C121.024 25.9723 121.699 24.2511 122.168 22.0512C122.638 19.8254 122.872 17.3149 122.872 14.5196C122.872 11.4397 122.506 9.11035 121.772 7.53157C121.039 5.92691 120.093 5.12458 118.934 5.12458C117.805 5.12458 116.808 5.74574 115.942 6.98806C115.077 8.2045 114.402 9.92563 113.918 12.1515C113.434 14.3514 113.192 16.8619 113.192 19.683C113.192 22.7629 113.559 25.1052 114.292 26.7099C115.026 28.2887 115.972 29.0781 117.13 29.0781Z" />
        </svg>
    )
}

export default Logo
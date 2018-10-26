import Mock from 'mockjs'
const index = Mock.mock('http://api.com/index', {
  'car': [
    {
      'name': '轿车',
      'children': [
        {
          'name': 'GA4',
          'img': '../assets/images/car/carriage/GA4.png'
        },
        {
          'name': 'GA6',
          'img': '../assets/images/car/carriage/GA6.png'
        },
        {
          'name': 'GA8',
          'img': '../assets/images/car/carriage/GA8.png'
        }
      ]
    },
    {
      'name': 'SUV',
      'children': [
        {
          'name': 'GS3',
          'img': '../assets/images/car/SUV/Gs3.png'
        },
        {
          'name': 'GS4',
          'img': '../assets/images/car/SUV/Gs4.png'
        },
        {
          'name': 'GS7',
          'img': '../assets/images/car/SUV/Gs7.png'
        },
        {
          'name': 'GS8',
          'img': '../assets/images/car/SUV/Gs8.png'
        }
      ]
    },
    {
      'name': '新能源车',
      'children': [
        {
          'name': 'GS4 PHEV',
          'img': '../assets/images/car/NewEnergy/GS4PHEV.png'
        },
        {
          'name': 'GA3S PHEV',
          'img': '../assets/images/car/NewEnergy/GA3S.png'
        },
        {
          'name': 'GE3',
          'img': '../assets/images/car/NewEnergy/GE3.png'
        }
      ]
    },
    {
      'name': '未来概念',
      'children': [
        {
          'name': 'E-JET',
          'img': '../assets/images/car/future/JET.png'
        },
        {
          'name': 'E-LINKER',
          'img': '../assets/images/car/future/E-LINKER.png'
        },
        {
          'name': 'EV CODE',
          'img': '../assets/images/car/future/EVCODE.png'
        }
      ]
    }
  ]
})

export default { index }

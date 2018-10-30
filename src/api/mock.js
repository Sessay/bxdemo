import Mock from 'mockjs'
const index = Mock.mock('http://api.com/index', {
  'car': [
    {
      'id': '1',
      'name': '轿车',
      'children': [
        {
          'id': '1.1',
          'name': 'GA4',
          'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png',
          'children': [
            {
              'id': '1.1.1',
              'years': '2018款',
              'children': [
                {
                  'id': '1.1.1.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.1.2',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.1.3',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.1.4',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.1.5',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.1.6',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.1.7',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.1.8',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            },
            {
              'id': '1.1.2',
              'years': '2017款',
              'children': [
                {
                  'id': '1.1.2.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.2.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.2.3',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.2.4',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.2.5',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.2.6',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            },
            {
              'id': '1.1.3',
              'years': '2016款',
              'children': [
                {
                  'id': '1.1.3.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.3.2',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.3.3',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.3.4',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            },
            {
              'id': '1.1.4',
              'years': '2015款',
              'children': [
                {
                  'id': '1.1.4.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.4.2',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.4.3',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.4.4',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            },
            {
              'id': '1.1.5',
              'years': '2014款',
              'children': [
                {
                  'id': '1.1.5.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.5.2',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.5.3',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.5.4',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            },
            {
              'id': '1.1.6',
              'years': '2013款',
              'children': [
                {
                  'id': '1.1.6.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.6.2',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.6.3',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.6.4',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            },
            {
              'id': '1.1.7',
              'years': '2012款',
              'children': [
                {
                  'id': '1.1.7.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.7.2',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.7.3',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.7.4',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            },
            {
              'id': '1.1.8',
              'years': '2011款',
              'children': [
                {
                  'id': '1.1.8.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.8.2',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.8.3',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.8.4',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            },
            {
              'id': '1.1.9',
              'years': '2010款',
              'children': [
                {
                  'id': '1.1.9.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.9.2',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.9.3',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.9.4',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            },
            {
              'id': '1.1.10',
              'years': '2009款',
              'children': [
                {
                  'id': '1.1.10.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.10.2',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            },
            {
              'id': '1.1.11',
              'years': '2008款',
              'children': [
                {
                  'id': '1.1.11.1',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.11.2',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                },
                {
                  'id': '1.1.11.3',
                  'name': 'GA4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga4Btn.png'
                }
              ]
            }
          ]
        },
        {
          'id': '1.2',
          'name': 'GA6',
          'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png',
          'children': [
            {
              'id': '1.2.1',
              'years': '2018款',
              'children': [
                {
                  'id': '1.2.1.1',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                },
                {
                  'id': '1.2.1.2',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                },
                {
                  'id': '1.2.1.3',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                },
                {
                  'id': '1.2.1.4',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                }
              ]
            },
            {
              'id': '1.2.2',
              'years': '2017款',
              'children': [
                {
                  'id': '1.2.2.1',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                },
                {
                  'id': '1.2.2.2',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                },
                {
                  'id': '1.2.2.3',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                },
                {
                  'id': '1.2.2.4',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                }
              ]
            },
            {
              'id': '1.2.3',
              'years': '2016款',
              'children': [
                {
                  'id': '1.2.3.1',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                },
                {
                  'id': '1.2.3.2',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                },
                {
                  'id': '1.2.3.3',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                },
                {
                  'id': '1.2.3.4',
                  'name': 'GA6',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga6Btn.png'
                }
              ]
            }
          ]
        },
        {
          'id': '1.3',
          'name': 'GA8',
          'img': 'http://www.gacmotor.com/Public/Home/img/ga8Btn.png',
          'children': [
            {
              'id': '1.3.1',
              'years': '2018款',
              'children': [
                {
                  'id': '1.3.1.1',
                  'name': 'GA8',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga8Btn.png'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': '2',
      'name': 'SUV',
      'children': [
        {
          'id': '2.1',
          'name': 'GS3',
          'img': 'http://www.gacmotor.com/Public/Home/img/SUVsm1.png',
          'children': [
            {
              'id': '2.1.1',
              'years': '2018款',
              'children': [
                {
                  'id': '2.1.1.1',
                  'name': 'GS3',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/SUVsm1.png'
                }
              ]
            }
          ]
        },
        {
          'id': '2.2',
          'name': 'GS4',
          'img': 'http://www.gacmotor.com/Public/Home/img/SUVsm4.png',
          'children': [
            {
              'id': '2.2.1',
              'years': '2018款',
              'children': [
                {
                  'id': '2.2.1.1',
                  'name': 'GS4',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/SUVsm4.png'
                }
              ]
            }
          ]
        },
        {
          'id': '2.3',
          'name': 'GS7',
          'img': 'http://www.gacmotor.com/Public/Home/img/SUVsm5.png',
          'children': [
            {
              'id': '2.3.1',
              'years': '2018款',
              'children': [
                {
                  'id': '2.3.1.1',
                  'name': 'GS7',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/SUVsm5.png'
                }
              ]
            }
          ]
        },
        {
          'id': '2.4',
          'name': 'GS8',
          'img': 'http://www.gacmotor.com/Public/Home/img/SUVsm6.png',
          'children': [
            {
              'id': '2.4.1',
              'years': '2018款',
              'children': [
                {
                  'id': '2.4.1.1',
                  'name': 'GS8',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/SUVsm6.png'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': '3',
      'name': 'MPV',
      'children': [
        {
          'id': '3.1',
          'name': 'GM8',
          'img': 'http://www.gacmotor.com/Public/Home/img/gm8Btn.png',
          'children': [
            {
              'id': '3.1.1',
              'years': '2018款',
              'children': [
                {
                  'id': '3.1.1.1',
                  'name': 'GM8',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/gm8Btn.png'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': '4',
      'name': '新能源车',
      'children': [
        {
          'id': '4.1',
          'name': 'GS4 PHEV',
          'img': 'http://www.gacmotor.com/Public/Home/img/gs4Btn.png',
          'children': [
            {
              'id': '4.1.1',
              'years': '2018款',
              'children': [
                {
                  'id': '4.1.1.1',
                  'name': 'GS4 PHEV',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/gs4Btn.png'
                }
              ]
            }
          ]
        },
        {
          'id': '4.2',
          'name': 'GA3S PHEV',
          'img': 'http://www.gacmotor.com/Public/Home/img/ga3sBtn.png',
          'children': [
            {
              'id': '4.2.1',
              'years': '2018款',
              'children': [
                {
                  'id': '4.2.1.1',
                  'name': 'GA3S PHEV',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ga3sBtn.png'
                }
              ]
            }
          ]
        },
        {
          'id': '4.3',
          'name': 'GE3',
          'img': 'http://www.gacmotor.com/Public/Home/img/ge3Btn.png',
          'children': [
            {
              'id': '4.3.1',
              'years': '2018款',
              'children': [
                {
                  'id': '4.3.1.1',
                  'name': 'GE3',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/ge3Btn.png'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': '5',
      'name': '未来概念',
      'children': [
        {
          'id': '5.1',
          'name': 'E-JET',
          'img': 'http://www.gacmotor.com/Public/Home/img/e-jetBtn.png',
          'children': [
            {
              'id': '5.1.1',
              'years': '2018款',
              'children': [
                {
                  'id': '5.1.1.1',
                  'name': 'E-JET',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/e-jetBtn.png'
                }
              ]
            }
          ]
        },
        {
          'id': '5.2',
          'name': 'E-LINKER',
          'img': 'http://www.gacmotor.com/Public/Home/img/e-linkerBtn.png',
          'children': [
            {
              'id': '5.2.1',
              'years': '2018款',
              'children': [
                {
                  'id': '5.2.1.1',
                  'name': 'E-LINKER',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/e-linkerBtn.png'
                }
              ]
            }
          ]
        },
        {
          'id': '5.3',
          'name': 'EV CODE',
          'img': 'http://www.gacmotor.com/Public/Home/img/evCoupeBtn.png',
          'children': [
            {
              'id': '5.3.1',
              'years': '2018款',
              'children': [
                {
                  'id': '5.3.1.1',
                  'name': 'EV CODE',
                  'introduce': '标准型，2TZD+5MT,2WD',
                  'img': 'http://www.gacmotor.com/Public/Home/img/evCoupeBtn.png'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

export default { index }

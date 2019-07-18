import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
import Logo from '../../assets/images/logo.png';


export default class ArticlePage extends Taro.Component {
  config = {
    navigationBarTitleText: '让渡居·关于我们'
  }

  render () {
    return (
      <View className='page'>
        {/* S Body */}
        <View className='doc-body'>
            <View className='at-row'></View>
          <View className='at-article'>
            {/* <View className='at-article__h1'>这是一级标题这是一级标题</View>
            <View className='at-article__info'>2017-05-07&nbsp;&nbsp;&nbsp;这是作者</View> */}
                    <View className='at-row at-row--wrap'>
                        <View className='at-col'>
                            <Image className='at-article__img' src={Logo} mode='widthFix' />
                        </View>
                        <View className='at-col at-col--wrap'>
                        <View className='at-article__h2'><h3 align = "center">让渡居</h3></View>
                            {/* <View className='at-article__h3'>三级标题</View> */}
                            <View className='at-article__p'>
                            让渡居是一家数字科技驱动的城市民宿管理服务商，我们致力于成为城市新型民宿的标准制定者。
                            我们通过大数据筛选出优质房源并科学合理定价，以匹配到更高入住率；通过提供智能、经济、环保、现代的设计方案，因房制宜完成轻改造与设计；
                            通过科技赋能，提高单位成本的最大管控能力。让渡居致力于营造放心快捷、安全可靠的居住体验，创造高于市场均值的稳定回报，
                            从而让每个民宿主成为长期合作伙伴，让每个入住者成为让渡居的长期伙伴。
                            </View>
                            
                        </View>
                        
                    </View>
                
            <View className='at-article__content'>
              <View className='at-article__section'>
                <View className='at-article__h2'><h3 align = "center">品牌故事</h3></View>
                {/* <View className='at-article__h3'>这是三级标题</View> */}
                <View className='at-article__p'>现代人类不断走出家庭、社区、乡镇，有越来越多脱离原生环境的机会，这同时创造出以下两种机会：
                对不同圈子的多元感受和对更复杂环境的深层体验。
                </View>

                <View className='at-article__p'>萧伯纳说过，“如果你有一个苹果，我有一个苹果，彼此交换，我们每个人仍然只有一个苹果；
                如果你有一种思想，我有一种思想，彼此交换，我们每个人就有了两种思想，甚至多于两种思想。”而民宿的诞生，在两个明确主体的彼此连接中，
                同时结合进了费用、体验等多方面的交换。这种互动性不仅可以为民宿主赚取经济上的可观回报，还可以给短租用户创造更经济、更丰富的体验。
                </View>

                <View className='at-article__p'>同样地，我们认为短租的存在，绝不仅仅为了完成交易的目的，在一个所有权和使用权分离的场所，
                两种角色实现接触交互本身就创造出无限可能，这是属于短租用户和民宿主的共同需求。岁月长，衣衫薄，我们相信每个人是一本独特的故事书。
                时讯纷杂，难辨真假，我们珍惜每一个亲身聆听故事的机会。
                </View>

                <View className='at-article__p'>为了让离家在外身处都市的人拥有一张舒适的床，让他们拥有稳定的对于便捷、清洁和安逸的预期，
                为了民宿主具备提供满足这种预期的专业能力，让他们可以提高每个房屋的市场价值从而创造出更多经济回报，为了打造都市中的轻民宿标准，
                让科技赋能短租服务，挖掘数据价值，落实万物互联，我们成立了让渡居。
                </View>

                <View className='at-article__p'>让渡居的存在前提，是所有居住者的切身诉求不断被满足。让渡居的发展根基，是所有民宿主的房间
                不断增值。我们关心居住者，服务民宿主，用数据挖掘现有房源的增长潜力，用设计打造新型民宿发展动能，用科技使得供需更准匹配，更快连接。
                从而让每一个旅行者和每一个民宿主分享对让渡居品牌的期待：智能、品质、卓越、信赖。
                </View>

                <View className='at-article__p'>让渡居自诞生之日起，便致力于同民宿主共同践行以上追求，我们怀着深信市场有效的信念，谨以我们
                的时间、财富和神圣的荣誉，相互保证，共同前行，努力成为制定中国城市经济民宿的新标准的标杆品牌。
                </View>



              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
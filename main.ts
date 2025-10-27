namespace SpriteKind {
    export const Screen_Saver = SpriteKind.create()
    export const Menu = SpriteKind.create()
    export const Menu_Item = SpriteKind.create()
    export const Control_Center_Item = SpriteKind.create()
}
function Change_Background () {
    Change_Background2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Earth", img`
        . . . . . 9 9 9 b b 9 9 . . . . 
        . . . . d d 6 8 8 8 1 c 9 . . . 
        . . . b 6 6 8 8 b b b c c c . . 
        . . b d 6 6 8 8 b b e 8 8 c 6 . 
        . 9 9 6 6 6 8 d b b b b c 8 c . 
        9 9 6 6 6 8 8 b b b b b c c 8 . 
        9 b 6 6 6 8 8 b b b b b c c c 8 
        9 b c 9 6 8 8 8 d d 8 b c c e 8 
        b b c c 6 8 8 8 d d 8 b c c 8 8 
        b b c c 6 8 8 8 d d 8 b c c 8 8 
        9 b b b 6 8 8 8 8 8 8 b c c 8 8 
        . b c 6 6 8 8 8 8 8 8 b c 8 b 9 
        . . b 6 6 d 6 8 8 8 8 b c 8 8 . 
        . . . 6 6 6 b 6 8 8 8 8 8 8 . . 
        . . . . 9 d 6 6 8 8 8 8 8 . . . 
        . . . . . 9 6 1 8 8 8 6 . . . . 
        `),
    miniMenu.createMenuItem("Earth (Pixels)", img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . 8 8 7 1 1 6 6 6 6 6 8 8 . . 
        . . 8 6 7 6 6 6 6 7 7 6 6 8 . . 
        . 8 6 7 7 7 6 1 1 6 1 1 1 1 8 . 
        . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
        8 7 7 6 6 6 6 6 6 6 7 7 7 7 7 8 
        8 1 1 1 1 6 1 1 1 6 7 7 7 7 7 8 
        8 6 6 1 6 6 6 6 6 6 6 6 6 6 6 8 
        8 6 1 1 1 1 1 6 6 6 6 7 7 7 7 8 
        . 8 6 6 1 1 7 7 7 6 6 6 7 7 8 . 
        . 8 6 1 1 1 1 7 7 6 6 1 1 6 8 . 
        . . 8 6 6 6 7 6 6 6 6 6 6 8 . . 
        . . 8 8 7 7 7 7 7 6 1 1 8 8 . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        `)
    )
    Change_Background2.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffff1ffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffff1fffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffff1ffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9f1fffffffffffffff1fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffff1fffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffff1fffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869fffffffffffffff1ffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffff1fffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffff1fffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffff1ffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffff1fffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffff1fff
                ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffff1fffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff1ffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffff1fffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669fffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffff
                fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffff1ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
        } else if (selectedIndex == 1) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1ffffffffffff1fffffffffff1f
                ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1ffffffffffffffffffffffffffffffffffff
                ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888ffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1ffffffffffffff
                ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff1ffffff1ffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777771111111116666666666666666666666668888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777771111111116666666666666666666666668888888888ffffffffffffffff1fffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777771111111116666666666666666666666668888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffff1fffffffffffffffffffffffff1fffffffffffffffffff8888888888777771111111116666666666666666666666668888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff1ffffffff8888888888777771111111116666666666666666666666668888888888ffffffffffffffffffffffffff1ffffffffffffffffffffff1ff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666777776666666666666666666777777777666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666777776666666666666666666777777777666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666777776666666666666666666777777777666666666688888ffffffffffffffffffffffffffffffffff1fffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666777776666666666666666666777777777666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666777776666666666666666666777777777666666666688888fffffffffff1ffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666667777777777777766666111111111166666111111111111111111188888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666667777777777777766666111111111166666111111111111111111188888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666667777777777777766666111111111166666111111111111111111188888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffff1fffffffffffffffffffffffffffffff88888666667777777777777766666111111111166666111111111111111111188888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666667777777777777766666111111111166666111111111111111111188888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666666666666666666666666666666666666666666666666666666666688888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666666666666666666666666666666666666666666666666666666666688888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffff1fffffffffffffff88888666666666666666666666666666666666666666666666666666666666688888fffffffffffffffff1fffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666666666666666666666666666666666666666666666666666666666688888fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888887777777777666666666666666666666666666666666677777777777777777777777788888fffffffffffffffffffffffffffffff1ffffffffff
                ffffffffffffffffffffffffffffffffffffffff888887777777777666666666666666666666666666666666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888887777777777666666666666666666666666666666666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888887777777777666666666666666666666666666666666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888887777777777666666666666666666666666666666666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888881111111111111111111166661111111111111116666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888881111111111111111111166661111111111111116666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffff1fffffffffffffffffffffffffffffffff888881111111111111111111166661111111111111116666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888881111111111111111111166661111111111111116666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffff1ffffff888881111111111111111111166661111111111111116666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888886666666666111116666666666666666666666666666666666666666666666666666688888ffffffffff1fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888886666666666111116666666666666666666666666666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888886666666666111116666666666666666666666666666666666666666666666666666688888fffffffffffffffff1ffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888886666666666111116666666666666666666666666666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888886666666666111116666666666666666666666666666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888886666611111111111111111111111166666666666666666667777777777777777777788888fffffffffffffffffffffffffffff1ffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888886666611111111111111111111111166666666666666666667777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff1fffffffffffffffffffffff888886666611111111111111111111111166666666666666666667777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffff1fffffffffffffffffffffffffffffffff888886666611111111111111111111111166666666666666666667777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff888886666611111111111111111111111166666666666666666667777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666666666611111111177777777777777766666666666666777777777788888fffffffffffffffffffff1ffffffffffffffffffff1ffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666666666611111111177777777777777766666666666666777777777788888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666666666611111111177777777777777766666666666666777777777788888fffffffffffffffffffffffffffffff1fffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666666666611111111177777777777777766666666666666777777777788888ffffff1ffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666661111111111111177777777777777766666666611111111116666688888ffffffffffffff1ffffffffffffffffffffffffffffffff
                fffffffffffffffffffffff1fffffffffffffffffffff88888666661111111111111111111777777777766666666611111111116666688888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666661111111111111111111777777777766666666611111111116666688888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666661111111111111111111777777777766666666611111111116666688888fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff88888666661111111111111111111777777777766666666611111111116666688888fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666666666666777776666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff1ffffffffffffffffffffffffffffffffffffffff8888866666666666666777776666666666666666666666666666688888ffffffffffffffffffffffffffffffffffff1fffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666666666666777776666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666666666666777776666666666666666666666666666688888ffffffffff1fffffffffffffff1fffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666666666666777776666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffff1ffffffffffffffff8888888888777777777777777777777777666661111111118888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777777777777777777777777666661111111118888888888ffffffffffffffffffffffffffffffffffffffffff1fffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777777777777777777777777666661111111118888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777777777777777777777777666661111111118888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777777777777777777777777666661111111118888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff
                ffffffffffffffffffffffffffff1fffffffffffffffffffffff1ffffffffffffffff88888888888888888888ffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1fffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff
                f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff1ffffffffff1ffffffffffffffff1fffffffff1ffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff1ff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
        }
    })
}
function Control_Center_Pause_2 () {
    pause(100)
    Control_Center_On = false
}
function Control_Ceter_Pause () {
    pause(100)
    Control_Center_On = true
}
function Interface () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1ffffffffffff1fffffffffff1f
        ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1ffffffffffffffffffffffffffffffffffff
        ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888ffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1ffffffffffffff
        ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff1ffffff1ffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777771111111116666666666666666666666668888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777771111111116666666666666666666666668888888888ffffffffffffffff1fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777771111111116666666666666666666666668888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffff1fffffffffffffffffffffffff1fffffffffffffffffff8888888888777771111111116666666666666666666666668888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff1ffffffff8888888888777771111111116666666666666666666666668888888888ffffffffffffffffffffffffff1ffffffffffffffffffffff1ff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666777776666666666666666666777777777666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666777776666666666666666666777777777666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666777776666666666666666666777777777666666666688888ffffffffffffffffffffffffffffffffff1fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666777776666666666666666666777777777666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666777776666666666666666666777777777666666666688888fffffffffff1ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666667777777777777766666111111111166666111111111111111111188888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666667777777777777766666111111111166666111111111111111111188888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666667777777777777766666111111111166666111111111111111111188888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1fffffffffffffffffffffffffffffff88888666667777777777777766666111111111166666111111111111111111188888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666667777777777777766666111111111166666111111111111111111188888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666666666666666666666666666666666666666666666666666666666688888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666666666666666666666666666666666666666666666666666666666688888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff1fffffffffffffff88888666666666666666666666666666666666666666666666666666666666688888fffffffffffffffff1fffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666666666666666666666666666666666666666666666666666666666688888fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888887777777777666666666666666666666666666666666677777777777777777777777788888fffffffffffffffffffffffffffffff1ffffffffff
        ffffffffffffffffffffffffffffffffffffffff888887777777777666666666666666666666666666666666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888887777777777666666666666666666666666666666666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888887777777777666666666666666666666666666666666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888887777777777666666666666666666666666666666666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888881111111111111111111166661111111111111116666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888881111111111111111111166661111111111111116666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffff1fffffffffffffffffffffffffffffffff888881111111111111111111166661111111111111116666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888881111111111111111111166661111111111111116666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff1ffffff888881111111111111111111166661111111111111116666677777777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888886666666666111116666666666666666666666666666666666666666666666666666688888ffffffffff1fffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888886666666666111116666666666666666666666666666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888886666666666111116666666666666666666666666666666666666666666666666666688888fffffffffffffffff1ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888886666666666111116666666666666666666666666666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888886666666666111116666666666666666666666666666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888886666611111111111111111111111166666666666666666667777777777777777777788888fffffffffffffffffffffffffffff1ffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888886666611111111111111111111111166666666666666666667777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff1fffffffffffffffffffffff888886666611111111111111111111111166666666666666666667777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffff1fffffffffffffffffffffffffffffffff888886666611111111111111111111111166666666666666666667777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888886666611111111111111111111111166666666666666666667777777777777777777788888ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666666666611111111177777777777777766666666666666777777777788888fffffffffffffffffffff1ffffffffffffffffffff1ffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666666666611111111177777777777777766666666666666777777777788888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666666666611111111177777777777777766666666666666777777777788888fffffffffffffffffffffffffffffff1fffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666666666611111111177777777777777766666666666666777777777788888ffffff1ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666661111111111111177777777777777766666666611111111116666688888ffffffffffffff1ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff1fffffffffffffffffffff88888666661111111111111111111777777777766666666611111111116666688888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666661111111111111111111777777777766666666611111111116666688888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666661111111111111111111777777777766666666611111111116666688888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888666661111111111111111111777777777766666666611111111116666688888fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666666666666777776666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff1ffffffffffffffffffffffffffffffffffffffff8888866666666666666777776666666666666666666666666666688888ffffffffffffffffffffffffffffffffffff1fffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666666666666777776666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666666666666777776666666666666666666666666666688888ffffffffff1fffffffffffffff1fffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888866666666666666777776666666666666666666666666666688888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff1ffffffffffffffff8888888888777777777777777777777777666661111111118888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777777777777777777777777666661111111118888888888ffffffffffffffffffffffffffffffffffffffffff1fffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777777777777777777777777666661111111118888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777777777777777777777777666661111111118888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888777777777777777777777777666661111111118888888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888866666666666666666666888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff
        ffffffffffffffffffffffffffff1fffffffffffffffffffffff1ffffffffffffffff88888888888888888888ffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1fffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff
        f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff1ffffffffff1ffffffffffffffff1fffffffff1ffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    Cursor = sprites.create(img`
        1 1 . . . . 
        1 f 1 . . . 
        1 f f 1 . . 
        1 f f f 1 . 
        1 f f f f 1 
        1 f f 1 1 1 
        1 f 1 1 . . 
        1 1 . . . . 
        `, SpriteKind.Player)
    Cursor.z = 1000
    controller.moveSprite(Cursor)
    Cursor.setStayInScreen(true)
    Pointer_Hitbox = sprites.create(img`
        3 . . . . . 
        . . . . . . 
        . . . . . . 
        . . . . . . 
        . . . . . . 
        . . . . . . 
        . . . . . . 
        . . . . . . 
        `, SpriteKind.Player)
    Pointer_Hitbox.setFlag(SpriteFlag.Invisible, true)
    Pointer_Hitbox.z = 1001
    Dock = sprites.create(img`
        ...111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111...
        ..11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
        ..11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
        ...111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111...
        `, SpriteKind.Player)
    Dock.setPosition(80, 110)
    Dock.z = 1
    mySprite = sprites.create(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11fffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1fffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1fffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11ffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11fffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111ff1ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Menu)
    mySprite.setPosition(80, 4)
    Control_Center_Icon = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 f f f f f f f f f f 1 
        f f f f f f 1 1 1 1 1 f 
        f f f f f f 1 1 1 1 1 f 
        1 f f f f f f f f f f 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 f f f f f f f f f f 1 
        f 1 1 1 1 1 f f f f f f 
        f 1 1 1 1 1 f f f f f f 
        1 f f f f f f f f f f 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Menu_Item)
    Control_Center_Icon.setPosition(140, 6)
    textSprite = textsprite.create("Mac OS Arcade BETA", 0, 15)
    textSprite.setMaxFontHeight(4)
    textSprite.setPosition(70, 6)
    music.setVolume(255)
    App_Load()
}
function restore_game () {
    if (Control_Center_On == false) {
        Cursor.setFlag(SpriteFlag.Invisible, false)
        sprites.destroy(ScreenSaver_Sprite)
    }
}
info.onLifeZero(function () {
	
})
function Control_Center2 () {
    Cursor.setFlag(SpriteFlag.Invisible, true)
}
function App_Load () {
    Settings_App = sprites.create(img`
        . d d b d b d b d b d . 
        d d b b b b b b b b d d 
        b b b d c d c d d b b d 
        d b d d c c c c d d b b 
        b b d c c d d c c c b d 
        d b c c d d d d c d b b 
        b b d c d d d d c c b d 
        d b c c c d d c c d b b 
        b b d d c c c c d d b d 
        d b b d d c d c d b b b 
        d d b b b b b b b b d d 
        . d b d b d b d b d d . 
        `, SpriteKind.Player)
    Settings_App.setPosition(22, 110)
    Settings_App.z = 2
    Music_App = sprites.create(img`
        . 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 1 1 1 2 2 2 
        2 2 2 1 1 1 1 1 1 2 2 2 
        2 2 2 1 1 1 2 2 1 2 2 2 
        2 2 2 1 2 2 2 2 1 2 2 2 
        2 2 2 1 2 2 2 2 1 2 2 2 
        2 2 2 1 2 2 2 2 1 2 2 2 
        2 2 1 1 2 2 2 1 1 2 2 2 
        2 2 1 1 2 2 2 1 1 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 . 
        `, SpriteKind.Player)
    Music_App.setPosition(38, 110)
    Music_App.z = 2
}
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.GT, statusbars.ComparisonType.Percentage, 100, function (status) {
    booted = true
    sprites.destroy(Apple_Logo)
    sprites.destroy(statusbar)
    pause(500)
})
let textSprite2: TextSprite = null
let Music_Menu: miniMenu.MenuSprite = null
let Music_Open = false
let Settings_Menu: miniMenu.MenuSprite = null
let Settings_Open = false
let Volume_Slider_Value = 0
let Dock_auto_hide = false
let Brightness_Change = false
let Clicked = false
let Volume_Change = false
let Brightness_Slider_Value = 0
let Music_App: Sprite = null
let Settings_App: Sprite = null
let textSprite: TextSprite = null
let Control_Center_Icon: Sprite = null
let mySprite: Sprite = null
let Dock: Sprite = null
let Pointer_Hitbox: Sprite = null
let Cursor: Sprite = null
let Change_Background2: miniMenu.MenuSprite = null
let statusbar: StatusBarSprite = null
let Apple_Logo: Sprite = null
let ScreenSaver_Sprite: Sprite = null
let booted = false
let Control_Center_On = false
Control_Center_On = false
booted = false
ScreenSaver_Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Screen_Saver)
let screensaver_active = false
let idle_timer = 0
let is_idle = false
let Dock_Hidden = false
let Control_Center_Window = sprites.create(img`
    . 
    `, SpriteKind.Control_Center_Item)
let Volume_Slider = sprites.create(img`
    . 
    `, SpriteKind.Control_Center_Item)
let Volume_Slider_Track = sprites.create(img`
    . 
    `, SpriteKind.Control_Center_Item)
let Brightness_Slider = sprites.create(img`
    . 
    `, SpriteKind.Control_Center_Item)
let Brightness_Slider_Track = sprites.create(img`
    . 
    `, SpriteKind.Control_Center_Item)
let Background = sprites.create(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `, SpriteKind.Player)
Background.z = -1
Background.setFlag(SpriteFlag.Invisible, true)
Apple_Logo = sprites.create(img`
    ...........11...
    ..........111...
    .........1111...
    .........111....
    .........11.....
    ................
    ...11111..11111.
    ..11111111111111
    .111111111111111
    .11111111111111.
    11111111111111..
    11111111111111..
    11111111111111..
    11111111111111..
    .11111111111111.
    .111111111111111
    .111111111111111
    ..11111111111111
    ..11111111111111
    ...111111111111.
    ....1111..1111..
    `, SpriteKind.Player)
Apple_Logo.setPosition(80, 55)
statusbar = statusbars.create(60, 5, StatusBarKind.Health)
statusbar.setPosition(80, 80)
statusbar.setColor(1, 15, 15)
statusbar.setBarBorder(1, 13)
statusbar.value = 0
statusbar.max = 200
music.setVolume(255)
music.play(music.createSong(hex`0078000408010405001c000f0a006400f4010a00000400000000000000000000000000000000020800000020000312161906001c00010a006400f4016400000400000000000000000000000000000000020800000020000312161907001c00020a006400f4016400000400000000000000000000000000000000030800000020000312161908001c000e050046006603320000040a002d000000640014000132000201000208000000200003121619`), music.PlaybackMode.UntilDone)
while (booted == false) {
    statusbar.value += randint(1, 20)
    pause(randint(1, 1000))
}
Interface()
forever(function () {
    info.setLife(Brightness_Slider_Value)
})
forever(function () {
    if (Pointer_Hitbox.overlapsWith(Control_Center_Icon) && controller.A.isPressed() && Control_Center_On == false) {
        Control_Center_Window = sprites.create(img`
            ...11111111111111111111111111111111111111111111111111111111111111...
            ..1111111111111111111111111111111111111111111111111111111111111111..
            .111111111111111111111111111111111111111111111111111111111111111111.
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111111
            .111111111111111111111111111111111111111111111111111111111111111111.
            ..1111111111111111111111111111111111111111111111111111111111111111..
            ...11111111111111111111111111111111111111111111111111111111111111...
            `, SpriteKind.Player)
        Control_Center_Window.setPosition(124, 39)
        Volume_Slider = sprites.create(img`
            . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . 
            `, SpriteKind.Player)
        Volume_Slider.setPosition(121, 30)
        Volume_Slider_Track = sprites.create(img`
            . . . f f f f f f . . . 
            . . f 1 1 1 1 1 1 f . . 
            . f 1 1 f f 1 f 1 1 f . 
            f 1 1 f 1 f 1 1 f 1 1 f 
            f 1 f 1 1 f f 1 f 1 1 f 
            f 1 f 1 1 f f 1 f 1 1 f 
            f 1 1 f 1 f 1 1 f 1 1 f 
            . f 1 1 f f 1 f 1 1 f . 
            . . f 1 1 1 1 1 1 f . . 
            . . . f f f f f f . . . 
            `, SpriteKind.Player)
        Volume_Slider_Track.setPosition(Volume_Slider.x + 18, Volume_Slider.y)
        Brightness_Slider = sprites.create(img`
            . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . 
            `, SpriteKind.Player)
        Brightness_Slider.setPosition(121, 50)
        Brightness_Slider_Track = sprites.create(img`
            . . . f f f f f f . . . 
            . . f 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 f f f f 1 1 1 f 
            f 1 1 1 f f f f 1 1 1 f 
            f 1 1 1 f f f f 1 1 1 f 
            f 1 1 1 f f f f 1 1 1 f 
            . f 1 1 1 1 1 1 1 1 f . 
            . . f 1 1 1 1 1 1 f . . 
            . . . f f f f f f . . . 
            `, SpriteKind.Player)
        Brightness_Slider_Track.setPosition(Brightness_Slider.x + 18, Brightness_Slider.y)
        Control_Ceter_Pause()
    } else if (Pointer_Hitbox.overlapsWith(Control_Center_Icon) && controller.A.isPressed() && Control_Center_On == true) {
        sprites.destroy(Control_Center_Window)
        sprites.destroy(Volume_Slider)
        sprites.destroy(Volume_Slider_Track)
        sprites.destroy(Brightness_Slider)
        sprites.destroy(Brightness_Slider_Track)
        Control_Center_Pause_2()
    }
})
forever(function () {
    if (controller.A.isPressed() && (booted == true && Control_Center_On == true && (Pointer_Hitbox.overlapsWith(Volume_Slider) || Pointer_Hitbox.overlapsWith(Volume_Slider_Track)))) {
        Volume_Change = true
        Clicked = true
        Control_Center2()
    }
    if (controller.A.isPressed() && (booted == true && Control_Center_On == true && (Pointer_Hitbox.overlapsWith(Brightness_Slider) || Pointer_Hitbox.overlapsWith(Brightness_Slider_Track)))) {
        Brightness_Change = true
        Clicked = true
        Control_Center2()
    }
})
forever(function () {
	
})
forever(function () {
    if (controller.left.isPressed() && Clicked == true) {
        if (Volume_Change == true) {
            Volume_Slider_Track.x += -1
        } else if (Brightness_Change == true) {
            Brightness_Slider_Track.x += -1
        }
    } else if (controller.right.isPressed() && Clicked == true) {
        if (Volume_Change == true) {
            Volume_Slider_Track.x += 1
        } else if (Brightness_Change == true) {
            Brightness_Slider_Track.x += 1
        }
    }
})
forever(function () {
    if (Dock_auto_hide == true) {
        if (Pointer_Hitbox.overlapsWith(Dock)) {
            Dock.setPosition(80, 110)
            Dock_Hidden = false
        }
        if (Pointer_Hitbox.overlapsWith(Background)) {
            animation.runImageAnimation(
            Dock,
            [img`
                ...111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111...
                ..11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111...
                `,img`
                .......................................................................................................................................
                ...111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111...
                ..11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                ...111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111...
                ..11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                .1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                ..1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                ...11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                ....111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111..
                `,img`
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                .......................................................................................................................................
                `],
            15,
            false
            )
            Dock.setPosition(9999999, 9999999)
            Dock_Hidden = true
        }
    }
})
forever(function () {
    if (Control_Center_On == true && Clicked == true) {
        if (Volume_Slider_Value > 112.6) {
            Volume_Slider_Track.setImage(img`
                . . . f f f f f f . . . 
                . . f 1 1 1 1 1 1 f . . 
                . f 1 1 f f 1 1 f 1 f . 
                f 1 1 f 1 f 1 1 1 f 1 f 
                f 1 f 1 1 f f 1 1 f 1 f 
                f 1 f 1 1 f f 1 1 f 1 f 
                f 1 1 f 1 f 1 1 1 f 1 f 
                . f 1 1 f f 1 1 f 1 f . 
                . . f 1 1 1 1 1 1 f . . 
                . . . f f f f f f . . . 
                `)
        } else if (Volume_Slider_Value < 112.5 && Volume_Slider_Value > 1) {
            Volume_Slider_Track.setImage(img`
                . . . f f f f f f . . . 
                . . f 1 1 1 1 1 1 f . . 
                . f 1 1 f f 1 f 1 1 f . 
                f 1 1 f 1 f 1 1 f 1 1 f 
                f 1 f 1 1 f f 1 f 1 1 f 
                f 1 f 1 1 f f 1 f 1 1 f 
                f 1 1 f 1 f 1 1 f 1 1 f 
                . f 1 1 f f 1 f 1 1 f . 
                . . f 1 1 1 1 1 1 f . . 
                . . . f f f f f f . . . 
                `)
        } else if (Volume_Slider_Value == 0) {
            Volume_Slider_Track.setImage(img`
                . . . f f f f f f . . . 
                . . f 1 1 1 1 1 1 f . . 
                . f 1 1 f f 1 1 1 1 f . 
                f 1 1 f 1 f 1 1 1 1 1 f 
                f 1 f 1 1 f f 1 1 1 1 f 
                f 1 f 1 1 f f 1 1 1 1 f 
                f 1 1 f 1 f 1 1 1 1 1 f 
                . f 1 1 f f 1 1 1 1 f . 
                . . f 1 1 1 1 1 1 f . . 
                . . . f f f f f f . . . 
                `)
        }
    }
})
forever(function () {
    if (Control_Center_On == true && Clicked == true) {
        if (Brightness_Slider_Value > 50.1) {
            Brightness_Slider_Track.setImage(img`
                . . . f f f f f f . . . 
                . . f 1 1 1 1 1 1 f . . 
                . f 1 1 f f f f 1 1 f . 
                f 1 1 f f f f f f 1 1 f 
                f 1 1 f f f f f f 1 1 f 
                f 1 1 f f f f f f 1 1 f 
                f 1 1 f f f f f f 1 1 f 
                . f 1 1 f f f f 1 1 f . 
                . . f 1 1 1 1 1 1 f . . 
                . . . f f f f f f . . . 
                `)
        } else if (Brightness_Slider_Value < 50 && Brightness_Slider_Value > 1) {
            Brightness_Slider_Track.setImage(img`
                . . . f f f f f f . . . 
                . . f 1 1 1 1 1 1 f . . 
                . f 1 1 1 1 1 1 1 1 f . 
                f 1 1 1 1 f f 1 1 1 1 f 
                f 1 1 1 f f f f 1 1 1 f 
                f 1 1 1 f f f f 1 1 1 f 
                f 1 1 1 1 f f 1 1 1 1 f 
                . f 1 1 1 1 1 1 1 1 f . 
                . . f 1 1 1 1 1 1 f . . 
                . . . f f f f f f . . . 
                `)
        } else if (Brightness_Slider_Value == 0) {
            Brightness_Slider_Track.setImage(img`
                . . . f f f f f f . . . 
                . . f 1 1 1 1 1 1 f . . 
                . f 1 1 1 1 1 1 1 1 f . 
                f 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 f f 1 1 1 1 f 
                f 1 1 1 1 f f 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 f 
                . f 1 1 1 1 1 1 1 1 f . 
                . . f 1 1 1 1 1 1 f . . 
                . . . f f f f f f . . . 
                `)
        }
    }
})
forever(function () {
    if (Pointer_Hitbox.overlapsWith(Settings_App) && controller.A.isPressed()) {
        Cursor.setPosition(0, 0)
        Settings_Open = true
        controller.moveSprite(Cursor, 0, 0)
        Settings_Menu = miniMenu.createMenu(
        miniMenu.createMenuItem("Auto hide taskbar", img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . 1 . . . . . . 
            . . . 1 . 1 . . . 1 . . 1 . . . 
            . 1 . 1 . 1 . 1 . 1 . . 1 . 1 . 
            . 1 . 1 . 1 . 1 . 1 . . 1 . 1 . 
            . . . . . . . . . . . . . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            `),
        miniMenu.createMenuItem("Background", img`
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 6 6 6 6 8 8 . . . . 
            . . 8 8 7 1 1 6 6 6 6 6 8 8 . . 
            . . 8 6 7 6 6 6 6 7 7 6 6 8 . . 
            . 8 6 7 7 7 6 1 1 6 1 1 1 1 8 . 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            8 7 7 6 6 6 6 6 6 6 7 7 7 7 7 8 
            8 1 1 1 1 6 1 1 1 6 7 7 7 7 7 8 
            8 6 6 1 6 6 6 6 6 6 6 6 6 6 6 8 
            8 6 1 1 1 1 1 6 6 6 6 7 7 7 7 8 
            . 8 6 6 1 1 7 7 7 6 6 6 7 7 8 . 
            . 8 6 1 1 1 1 7 7 6 6 1 1 6 8 . 
            . . 8 6 6 6 7 6 6 6 6 6 6 8 . . 
            . . 8 8 7 7 7 7 7 6 1 1 8 8 . . 
            . . . . 8 8 6 6 6 6 8 8 . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            `)
        )
        Settings_Menu.setDimensions(150, 30)
        Settings_Menu.setPosition(80, 60)
        Settings_Menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
                if (Dock_auto_hide == false) {
                    Dock.setPosition(9999999, 9999999)
                    Dock_auto_hide = true
                } else if (Dock_auto_hide == true) {
                    Dock.setPosition(80, 110)
                    Dock_auto_hide = false
                }
            } else if (selectedIndex == 1) {
                Settings_Menu.close()
                Change_Background()
            }
        })
    } else if (Pointer_Hitbox.overlapsWith(Music_App) && controller.A.isPressed()) {
        Cursor.setPosition(0, 0)
        Music_Open = true
        controller.moveSprite(Cursor, 0, 0)
        Music_Menu = miniMenu.createMenu(
        miniMenu.createMenuItem("Good Song", img`
            . 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 1 2 2 2 2 2 
            2 2 2 2 2 2 1 2 2 2 2 2 
            2 2 2 2 2 2 1 2 2 2 2 2 
            2 2 2 2 2 2 1 2 2 2 2 2 
            2 2 2 2 2 2 1 2 2 2 2 2 
            2 2 2 2 2 1 1 2 2 2 2 2 
            2 2 2 2 2 1 1 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 . 
            `)
        )
        Music_Menu.setDimensions(150, 30)
        Music_Menu.setPosition(80, 60)
        Music_Menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            let selectedIndex2 = 0
            if (selectedIndex2 == 0) {
                for (let index = 0; index < 2; index++) {
                    music.play(music.createSong(hex`0096000408030109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80060000000010001010600070001010d000e0001061300140001011600170001061d001e0001062000210001012600270001063200330001013800390001013f00400001064500460001014800490001064f0050000106520053000101580059000107`), music.PlaybackMode.UntilDone)
                    pause(150)
                }
                for (let index = 0; index < 2; index++) {
                    music.play(music.createSong(hex`0096000408030305001c000f0a006400f4010a0000040000000000000000000000000000000002180000000400011919001d0001183200360001164b004f00011808001c000e050046006603320000040a002d00000064001400013200020100025800000004000125070008000325292c100011000325292c18001c0001241f0020000324272a280029000324272a32003600012239003a000322252942004300032225294b004f000124520053000324272a5b005c000324272a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80054000000010004120001020700080004120001020d000e00010718001900041200010220002100041200010232003300041200010239003a0004120001023f00400001074b004c000412000102520053000412000102`), music.PlaybackMode.UntilDone)
                    pause(150)
                }
                music.play(music.createSong(hex`0096000408030305001c000f0a006400f4010a0000040000000000000000000000000000000002180000000400011919001d0001183200360001164b004f00011808001c000e050046006603320000040a002d00000064001400013200020100025800000004000125070008000325292c100011000325292c18001c0001241f0020000324272a280029000324272a32003600012239003a000322252942004300032225294b004f000124520053000324272a5b005c000324272a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80054000000010004120001020700080004120001020d000e00010718001900041200010220002100041200010232003300041200010239003a0004120001023f00400001074b004c000412000102520053000412000102`), music.PlaybackMode.UntilDone)
                music.play(music.createSong(hex`0096000408030305001c000f0a006400f4010a0000040000000000000000000000000000000002180000000400011919001d0001183200360001164b004f00011808001c000e050046006603320000040a002d00000064001400013200020100024800000004000125070008000325292c100011000325292c18001c0001241f0020000324272a32003600012239003a000322252942004300032225294b004f000124520053000324272a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800680000000100021201060007000212010d000e000106130014000212011600170001061d001e0001062000210002120126002700010632003300021201380039000212013f0040000106450046000212014800490001064f005000010652005300021201580059000107`), music.PlaybackMode.UntilDone)
                textSprite2 = textsprite.create("Value: " + Volume_Slider_Value)
                textSprite2.setPosition(80, 77)
            }
        })
    }
})
forever(function () {
    if (controller.B.isPressed() && Settings_Open == true) {
        Settings_Open = false
        Settings_Menu.close()
        controller.moveSprite(Cursor, 100, 100)
    } else if (controller.B.isPressed() && Music_Open == true) {
        Music_Open = false
        Music_Menu.close()
        controller.moveSprite(Cursor, 100, 100)
    } else if (controller.B.isPressed() && Control_Center_On == true) {
        Clicked = false
        Volume_Change = false
        Brightness_Change = false
        Cursor.setFlag(SpriteFlag.Invisible, false)
    }
})
forever(function () {
    Pointer_Hitbox.x = Cursor.x
    Pointer_Hitbox.y = Cursor.y
})
forever(function () {
    music.setVolume(Volume_Slider_Value)
    brightness.setBrightness(Brightness_Slider_Value)
})
forever(function () {
    if (Volume_Slider_Track.x < Volume_Slider.left) {
        Volume_Slider_Track.x = Volume_Slider.left
    }
    if (Volume_Slider_Track.x > Volume_Slider.right) {
        Volume_Slider_Track.x = Volume_Slider.right
    }
    Volume_Slider_Value = (Volume_Slider_Track.x - Volume_Slider.left) * (255 / (Volume_Slider.right - Volume_Slider.left))
    if (Brightness_Slider_Track.x < Brightness_Slider.left) {
        Brightness_Slider_Track.x = Brightness_Slider.left
    }
    if (Brightness_Slider_Track.x > Brightness_Slider.right) {
        Brightness_Slider_Track.x = Brightness_Slider.right
    }
    Brightness_Slider_Value = Brightness_Slider.x - Brightness_Slider_Track.left
})
forever(function () {
	
})
game.onUpdateInterval(500, function () {
    if ((Cursor.vx != 0 || Cursor.vy != 0) && booted == true) {
        idle_timer += 1
    } else {
        screensaver_active = false
        idle_timer = 0
        restore_game()
    }
    if (idle_timer > 40 && screensaver_active == false) {
        ScreenSaver_Sprite = sprites.create(img`
            ............ff....
            ...........f11f...
            ..........f111f...
            .........f1111f...
            .........f111f....
            .........f11f.....
            ..........ff......
            ..................
            ....fffff..fffff..
            ...f11111ff11111f.
            ..f11111111111111f
            .f111111111111111f
            .f11111111111111f.
            f11111111111111f..
            f11111111111111f..
            f11111111111111f..
            f11111111111111f..
            .f11111111111111f.
            .f111111111111111f
            .f111111111111111f
            ..f11111111111111f
            ..f11111111111111f
            ...f111111111111f.
            ....f1111ff1111f..
            .....ffff..ffff...
            `, SpriteKind.Screen_Saver)
        ScreenSaver_Sprite.setBounceOnWall(true)
        ScreenSaver_Sprite.setVelocity(50, 50)
        ScreenSaver_Sprite.z = 2000
        Cursor.setFlag(SpriteFlag.Invisible, true)
        screensaver_active = true
    }
})

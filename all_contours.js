const allContours = [[[483, 58], [482, 59], [474, 59], [473, 60], [467, 60], [466, 61], [461, 61], [460, 62], [455, 62], [454, 63], [449, 63], [448, 64], [446, 64], [445, 65], [442, 65], [441, 66], [440, 66], [439, 67], [437, 67], [436, 68], [435, 68], [434, 69], [431, 69], [430, 70], [428, 70], [427, 71], [423, 71], [422, 72], [419, 72], [418, 73], [416, 73], [415, 74], [413, 74], [412, 75], [409, 75], [408, 76], [406, 76], [405, 77], [401, 77], [400, 78], [399, 78], [398, 79], [394, 79], [393, 80], [390, 80], [389, 81], [388, 81], [386, 83], [384, 83], [382, 85], [379, 85], [378, 86], [375, 86], [374, 87], [373, 87], [372, 88], [371, 88], [370, 89], [369, 89], [368, 90], [367, 90], [366, 91], [365, 91], [364, 92], [362, 92], [360, 94], [359, 94], [357, 96], [356, 96], [355, 97], [354, 97], [352, 99], [351, 99], [346, 104], [346, 105], [345, 106], [345, 107], [344, 108], [344, 109], [343, 110], [343, 111], [342, 112], [342, 113], [339, 116], [339, 119], [336, 122], [336, 131], [337, 132], [337, 133], [338, 134], [337, 135], [337, 136], [336, 137], [336, 138], [335, 139], [335, 140], [334, 141], [334, 142], [332, 144], [332, 145], [331, 146], [331, 147], [330, 148], [330, 149], [329, 150], [329, 151], [328, 152], [328, 155], [327, 156], [327, 159], [326, 160], [326, 161], [325, 162], [325, 163], [324, 164], [324, 167], [322, 169], [322, 170], [321, 171], [321, 172], [320, 173], [320, 175], [319, 176], [319, 177], [314, 182], [314, 183], [313, 184], [313, 186], [312, 187], [312, 188], [311, 189], [311, 191], [310, 192], [310, 193], [309, 194], [309, 198], [308, 199], [308, 203], [307, 204], [307, 205], [306, 206], [306, 207], [305, 208], [305, 212], [306, 213], [306, 214], [307, 215], [307, 217], [308, 218], [308, 219], [310, 221], [311, 221], [312, 222], [314, 222], [315, 223], [316, 223], [317, 224], [316, 225], [316, 227], [315, 228], [315, 229], [314, 230], [314, 231], [313, 232], [313, 233], [312, 234], [312, 235], [311, 236], [311, 237], [310, 238], [310, 239], [309, 240], [309, 241], [308, 242], [308, 244], [307, 245], [307, 246], [306, 247], [306, 248], [305, 249], [305, 250], [304, 251], [304, 252], [303, 253], [303, 254], [302, 255], [302, 257], [301, 258], [301, 261], [300, 262], [300, 263], [299, 264], [299, 267], [298, 268], [298, 269], [297, 270], [297, 272], [296, 273], [296, 274], [295, 275], [295, 276], [294, 277], [294, 278], [293, 279], [293, 280], [292, 281], [292, 284], [291, 285], [291, 287], [290, 288], [290, 297], [291, 298], [291, 299], [293, 301], [294, 301], [296, 303], [298, 303], [300, 305], [301, 305], [302, 306], [305, 306], [306, 307], [307, 307], [308, 308], [307, 309], [306, 309], [305, 310], [305, 311], [304, 312], [304, 313], [303, 314], [303, 323], [302, 324], [302, 325], [301, 326], [301, 327], [302, 328], [302, 329], [303, 330], [303, 331], [309, 337], [312, 337], [313, 338], [316, 338], [320, 342], [320, 343], [326, 349], [326, 350], [324, 352], [324, 353], [323, 354], [323, 355], [322, 356], [322, 363], [320, 365], [320, 366], [318, 368], [318, 369], [317, 370], [317, 371], [315, 373], [315, 374], [314, 375], [314, 376], [313, 377], [313, 378], [312, 379], [312, 380], [311, 381], [311, 384], [308, 387], [308, 389], [306, 391], [306, 393], [307, 394], [307, 401], [309, 403], [309, 405], [308, 406], [308, 411], [307, 412], [307, 415], [306, 416], [306, 422], [305, 423], [305, 428], [304, 429], [304, 438], [305, 439], [305, 440], [306, 441], [306, 443], [308, 445], [308, 447], [309, 448], [309, 449], [314, 454], [314, 455], [316, 457], [316, 458], [321, 463], [322, 463], [324, 465], [327, 465], [328, 466], [329, 466], [330, 467], [331, 467], [332, 468], [333, 468], [335, 470], [338, 470], [339, 471], [346, 471], [347, 472], [358, 472], [359, 471], [372, 471], [373, 470], [374, 470], [375, 469], [379, 469], [380, 468], [381, 468], [383, 466], [383, 465], [385, 463], [386, 463], [392, 457], [395, 457], [396, 456], [402, 456], [404, 454], [405, 454], [407, 452], [407, 450], [409, 448], [410, 448], [412, 450], [412, 454], [413, 455], [413, 457], [414, 458], [414, 459], [415, 460], [415, 462], [413, 464], [413, 465], [406, 472], [405, 472], [401, 476], [401, 477], [399, 479], [399, 482], [397, 484], [397, 486], [396, 487], [396, 488], [392, 492], [392, 493], [391, 494], [391, 495], [390, 496], [390, 499], [388, 501], [388, 502], [387, 503], [387, 506], [386, 507], [386, 509], [385, 510], [385, 513], [384, 514], [384, 521], [383, 522], [383, 524], [384, 525], [384, 529], [383, 530], [383, 536], [387, 540], [390, 540], [391, 541], [392, 540], [404, 540], [405, 539], [468, 539], [469, 538], [480, 538], [481, 537], [483, 537], [484, 536], [492, 536], [493, 535], [498, 535], [499, 534], [501, 534], [502, 533], [508, 533], [509, 532], [515, 532], [516, 531], [521, 531], [522, 530], [523, 530], [524, 529], [527, 529], [528, 528], [530, 528], [531, 527], [534, 527], [536, 525], [538, 525], [539, 524], [542, 524], [543, 523], [544, 523], [545, 522], [549, 522], [550, 521], [551, 521], [553, 519], [555, 519], [556, 518], [557, 518], [558, 517], [561, 517], [562, 516], [564, 516], [565, 515], [566, 515], [567, 514], [571, 514], [572, 513], [574, 513], [575, 512], [577, 512], [578, 511], [580, 511], [581, 510], [582, 510], [583, 509], [586, 509], [587, 508], [589, 508], [590, 507], [592, 507], [593, 506], [596, 506], [598, 504], [601, 504], [603, 502], [605, 502], [606, 501], [608, 501], [609, 500], [611, 500], [612, 499], [614, 499], [615, 498], [618, 498], [619, 497], [620, 497], [621, 496], [623, 496], [624, 495], [625, 495], [626, 494], [629, 494], [630, 493], [631, 493], [632, 492], [634, 492], [635, 491], [637, 491], [638, 490], [641, 490], [642, 489], [648, 489], [649, 488], [655, 488], [656, 487], [667, 487], [668, 486], [675, 486], [676, 485], [677, 485], [678, 484], [679, 484], [680, 483], [683, 483], [684, 482], [686, 482], [687, 481], [690, 481], [691, 480], [692, 480], [693, 479], [696, 479], [697, 478], [700, 478], [701, 477], [703, 477], [704, 476], [709, 476], [710, 475], [711, 475], [712, 474], [715, 474], [716, 473], [717, 473], [718, 472], [720, 472], [721, 471], [722, 471], [723, 470], [726, 470], [727, 469], [733, 469], [734, 468], [739, 468], [740, 467], [741, 467], [742, 466], [743, 466], [744, 465], [746, 465], [747, 464], [749, 464], [750, 463], [752, 463], [752, 459], [751, 458], [750, 458], [749, 457], [747, 457], [746, 456], [745, 456], [744, 455], [743, 455], [742, 454], [741, 454], [740, 453], [738, 453], [737, 452], [735, 452], [734, 451], [732, 451], [731, 450], [728, 450], [727, 449], [724, 449], [723, 448], [721, 448], [719, 446], [717, 446], [716, 445], [712, 445], [710, 443], [710, 442], [708, 440], [707, 440], [700, 433], [699, 433], [691, 425], [690, 425], [689, 424], [688, 424], [685, 421], [680, 421], [679, 422], [678, 422], [677, 423], [674, 423], [673, 424], [670, 424], [669, 425], [668, 424], [668, 423], [667, 422], [667, 420], [666, 419], [666, 417], [664, 415], [664, 412], [663, 411], [663, 409], [662, 408], [662, 407], [661, 407], [659, 405], [645, 405], [644, 406], [632, 406], [629, 403], [629, 401], [628, 400], [628, 398], [627, 397], [627, 395], [626, 394], [626, 390], [625, 389], [625, 388], [624, 387], [624, 386], [623, 385], [623, 384], [622, 383], [622, 382], [621, 381], [621, 378], [620, 377], [620, 376], [619, 375], [619, 374], [617, 372], [617, 370], [616, 369], [616, 367], [615, 366], [615, 363], [614, 362], [614, 354], [613, 353], [613, 342], [612, 341], [612, 318], [613, 317], [613, 313], [614, 312], [614, 310], [616, 308], [616, 307], [617, 306], [617, 305], [622, 300], [622, 299], [624, 297], [625, 297], [629, 293], [629, 292], [631, 290], [632, 290], [640, 282], [641, 282], [649, 274], [649, 273], [650, 272], [650, 271], [652, 269], [652, 268], [654, 266], [654, 265], [656, 263], [656, 262], [657, 261], [657, 260], [658, 259], [658, 258], [660, 256], [660, 255], [662, 253], [662, 252], [663, 251], [663, 249], [664, 248], [664, 246], [665, 245], [665, 243], [666, 242], [666, 237], [667, 236], [667, 210], [666, 209], [666, 206], [665, 205], [665, 189], [664, 188], [664, 185], [663, 184], [663, 183], [661, 181], [661, 180], [660, 179], [660, 178], [659, 177], [659, 175], [658, 174], [658, 173], [657, 172], [657, 171], [656, 170], [656, 168], [654, 166], [654, 165], [653, 164], [653, 163], [652, 162], [652, 160], [651, 159], [651, 158], [650, 157], [650, 154], [649, 153], [649, 151], [648, 150], [648, 149], [646, 147], [646, 146], [644, 144], [644, 143], [642, 141], [642, 140], [641, 139], [641, 138], [638, 135], [638, 131], [637, 130], [637, 123], [636, 122], [636, 121], [635, 120], [635, 119], [634, 118], [634, 115], [633, 114], [633, 113], [632, 112], [632, 110], [631, 109], [631, 108], [630, 107], [630, 106], [628, 104], [628, 102], [627, 101], [627, 100], [625, 98], [625, 97], [624, 96], [624, 95], [619, 90], [619, 89], [609, 79], [607, 79], [605, 77], [604, 77], [602, 75], [601, 75], [599, 73], [598, 73], [597, 72], [595, 72], [593, 70], [592, 70], [591, 69], [589, 69], [588, 68], [587, 68], [586, 67], [583, 67], [582, 66], [580, 66], [579, 65], [578, 65], [577, 64], [574, 64], [573, 63], [571, 63], [570, 62], [565, 62], [564, 61], [558, 61], [557, 60], [551, 60], [550, 59], [536, 59], [535, 58]]];
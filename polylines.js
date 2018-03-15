function lithuania(){    
    let shapes = [];  

    let path = [
    new google.maps.LatLng(56.068202768322614, 21.063194274902344),
    new google.maps.LatLng(56.081232405312235, 21.14421844482422),
    new google.maps.LatLng(56.08583004898797, 21.15863800048828),
    new google.maps.LatLng(56.07625100546066, 21.17992401123047),
    new google.maps.LatLng(56.078933377711124, 21.203956604003906),
    new google.maps.LatLng(56.10000266317759, 21.214256286621094),
    new google.maps.LatLng(56.116466986937276, 21.227989196777344),
    new google.maps.LatLng(56.12641874305864, 21.236915588378906),
    new google.maps.LatLng(56.15013946621393, 21.22730255126953),
    new google.maps.LatLng(56.16199434008271, 21.23056411743164),
    new google.maps.LatLng(56.16543539253529, 21.249103546142578),
    new google.maps.LatLng(56.16944956410264, 21.265239715576172),
    new google.maps.LatLng(56.18110739733947, 21.28377914428711),
    new google.maps.LatLng(56.19295271544726, 21.298885345458984),
    new google.maps.LatLng(56.21930497667925, 21.329784393310547),
    new google.maps.LatLng(56.22102297342495, 21.344547271728516),
    new google.maps.LatLng(56.22579478256016, 21.362743377685547),
    new google.maps.LatLng(56.2330467945337, 21.392269134521484),
    new google.maps.LatLng(56.244113008636035, 21.416301727294922),
    new google.maps.LatLng(56.24220526879677, 21.430721282958984),
    new google.maps.LatLng(56.24716519469748, 21.441020965576172),
    new google.maps.LatLng(56.2584180282225, 21.462650299072266),
    new google.maps.LatLng(56.26890497889192, 21.46677017211914),
    new google.maps.LatLng(56.27957964862128, 21.479129791259766),
    new google.maps.LatLng(56.28872699454251, 21.49148941040039),
    new google.maps.LatLng(56.294824009416914, 21.501102447509766),
    new google.maps.LatLng(56.290822953101156, 21.515178680419922),
    new google.maps.LatLng(56.294633492422875, 21.53921127319336),
    new google.maps.LatLng(56.30434864830831, 21.55740737915039),
    new google.maps.LatLng(56.31387091328177, 21.561527252197266),
    new google.maps.LatLng(56.316536722113014, 21.569080352783203),
    new google.maps.LatLng(56.32224854301452, 21.592426300048828),
    new google.maps.LatLng(56.322438922329695, 21.633281707763672),
    new google.maps.LatLng(56.31863115565198, 21.65456771850586),
    new google.maps.LatLng(56.312537939083086, 21.673450469970703),
    new google.maps.LatLng(56.31406133436954, 21.722545623779297),
    new google.maps.LatLng(56.32015430789164, 21.727352142333984),
    new google.maps.LatLng(56.321487016260484, 21.732845306396484),
    new google.maps.LatLng(56.33766619198202, 21.758594512939453),
    new google.maps.LatLng(56.33709527900029, 21.765117645263672),
    new google.maps.LatLng(56.362017189479324, 21.80734634399414),
    new google.maps.LatLng(56.37266586249919, 21.835498809814453),
    new google.maps.LatLng(56.36620095155117, 21.866397857666016),
    new google.maps.LatLng(56.36334843631123, 21.873950958251953),
    new google.maps.LatLng(56.37057439366868, 21.916179656982422),
    new google.maps.LatLng(56.37665834789627, 21.945362091064453),
    new google.maps.LatLng(56.38179092873943, 21.95669174194336),
    new google.maps.LatLng(56.377798981174806, 21.963558197021484),
    new google.maps.LatLng(56.37760887799976, 21.970081329345703),
    new google.maps.LatLng(56.39129388226516, 21.976604461669922),
    new google.maps.LatLng(56.406873593661125, 21.991024017333984),
    new google.maps.LatLng(56.41371145300884, 21.99686050415039),
    new google.maps.LatLng(56.41409129805664, 22.007160186767578),
    new google.maps.LatLng(56.4150408940854, 22.013683319091797),
    new google.maps.LatLng(56.42358619184781, 22.01162338256836),
    new google.maps.LatLng(56.42586461372155, 22.020206451416016),
    new google.maps.LatLng(56.424915287862355, 22.03531265258789),
    new google.maps.LatLng(56.4184592435487, 22.044925689697266),
    new google.maps.LatLng(56.41769963687874, 22.047672271728516),
    new google.maps.LatLng(56.4213076334746, 22.05556869506836),
    new google.maps.LatLng(56.42206716809922, 22.068614959716797),
    new google.maps.LatLng(56.429092144391, 22.123031616210938),
    new google.maps.LatLng(56.416180378034895, 22.171096801757812),
    new google.maps.LatLng(56.42605447604972, 22.208175659179688),
    new google.maps.LatLng(56.40250431799085, 22.246627807617188),
    new google.maps.LatLng(56.413141678326745, 22.293319702148438),
    new google.maps.LatLng(56.39794453902407, 22.344131469726562),
    new google.maps.LatLng(56.40022449678061, 22.372970581054688),
    new google.maps.LatLng(56.40630371658397, 22.412796020507812),
    new google.maps.LatLng(56.40250431799085, 22.455368041992188),
    new google.maps.LatLng(56.40402412294084, 22.475967407226562),
    new google.maps.LatLng(56.39186398407859, 22.525405883789062),
    new google.maps.LatLng(56.384261924755776, 22.596817016601562),
    new google.maps.LatLng(56.36677142898368, 22.640762329101562),
    new google.maps.LatLng(56.35612110895762, 22.672348022460938),
    new google.maps.LatLng(56.35459939177314, 22.691574096679688),
    new google.maps.LatLng(56.370194114276245, 22.726335525512695),
    new google.maps.LatLng(56.3721905387533, 22.73972511291504),
    new google.maps.LatLng(56.37152507554846, 22.75019645690918),
    new google.maps.LatLng(56.36753205227852, 22.76015281677246),
    new google.maps.LatLng(56.36857788452434, 22.786588668823242),
    new google.maps.LatLng(56.36715174252849, 22.809934616088867),
    new google.maps.LatLng(56.36743697519675, 22.822980880737305),
    new google.maps.LatLng(56.36620095155117, 22.839975357055664),
    new google.maps.LatLng(56.37133494106981, 22.874650955200195),
    new google.maps.LatLng(56.378559384389455, 22.916622161865234),
    new google.maps.LatLng(56.38749298538216, 22.928295135498047),
    new google.maps.LatLng(56.398134540719184, 22.920055389404297),
    new google.maps.LatLng(56.404214094292705, 22.937564849853516),
    new google.maps.LatLng(56.414281219158475, 22.945117950439453),
    new google.maps.LatLng(56.41295175153659, 22.968807220458984),
    new google.maps.LatLng(56.40630371658397, 22.97739028930664),
    new google.maps.LatLng(56.406873593661125, 23.001422882080078),
    new google.maps.LatLng(56.370764531941944, 23.017902374267578),
    new google.maps.LatLng(56.368102509788336, 23.00588607788086),
    new google.maps.LatLng(56.344897017087064, 23.01584243774414),
    new google.maps.LatLng(56.31996391718443, 23.044681549072266),
    new google.maps.LatLng(56.324152293447526, 23.069744110107422),
    new google.maps.LatLng(56.31767915464774, 23.08553695678711),
    new google.maps.LatLng(56.303777236922606, 23.093090057373047),
    new google.maps.LatLng(56.30739603136637, 23.115062713623047),
    new google.maps.LatLng(56.31263315306869, 23.111886978149414),
    new google.maps.LatLng(56.33709527900029, 23.177719116210938),
    new google.maps.LatLng(56.36981383108917, 23.172225952148438),
    new google.maps.LatLng(56.374376978893515, 23.280715942382812),
    new google.maps.LatLng(56.38274133079222, 23.332901000976562),
    new google.maps.LatLng(56.3796999607553, 23.391952514648438),
    new google.maps.LatLng(56.35536025795627, 23.442764282226562),
    new google.maps.LatLng(56.3409012041991, 23.499069213867188),
    new google.maps.LatLng(56.334050265497254, 23.527908325195312),
    new google.maps.LatLng(56.33861769463613, 23.562240600585938),
    new google.maps.LatLng(56.34698989490647, 23.604812622070312),
    new google.maps.LatLng(56.362207370444445, 23.635025024414062),
    new google.maps.LatLng(56.37133494106981, 23.725662231445312),
    new google.maps.LatLng(56.37285599033745, 23.769607543945312),
    new google.maps.LatLng(56.32339080466599, 23.775100708007812),
    new google.maps.LatLng(56.341662343683225, 23.798446655273438),
    new google.maps.LatLng(56.33557280262112, 23.923416137695312),
    new google.maps.LatLng(56.32872090717995, 23.992080688476562),
    new google.maps.LatLng(56.32719809668835, 24.019546508789062),
    new google.maps.LatLng(56.29977711792564, 24.041519165039062),
    new google.maps.LatLng(56.27996083172844, 24.049758911132812),
    new google.maps.LatLng(56.27767367609048, 24.096450805664062),
    new google.maps.LatLng(56.249454174583384, 24.118423461914062),
    new google.maps.LatLng(56.24792820319822, 24.178848266601562),
    new google.maps.LatLng(56.287583695980935, 24.284591674804688),
    new google.maps.LatLng(56.30149150591722, 24.285449981689453),
    new google.maps.LatLng(56.297300643917914, 24.34072494506836),
    new google.maps.LatLng(56.27195518852657, 24.368019104003906),
    new google.maps.LatLng(56.2774830736128, 24.390850067138672),
    new google.maps.LatLng(56.25918081245906, 24.439945220947266),
    new google.maps.LatLng(56.25918081245906, 24.454708099365234),
    new google.maps.LatLng(56.26680781868549, 24.461917877197266),
    new google.maps.LatLng(56.281676108690824, 24.519939422607422),
    new google.maps.LatLng(56.290822953101156, 24.578990936279297),
    new google.maps.LatLng(56.32129663219867, 24.57590103149414),
    new google.maps.LatLng(56.35079483312476, 24.619674682617188),
    new google.maps.LatLng(56.373996737446134, 24.62757110595703),
    new google.maps.LatLng(56.377798981174806, 24.685935974121094),
    new google.maps.LatLng(56.40288427491754, 24.70447540283203),
    new google.maps.LatLng(56.400984452355615, 24.77245330810547),
    new google.maps.LatLng(56.42035819386503, 24.80541229248047),
    new google.maps.LatLng(56.41883904119576, 24.865150451660156),
    new google.maps.LatLng(56.43554638396887, 24.85279083251953),
    new google.maps.LatLng(56.45034902929675, 24.88231658935547),
    new google.maps.LatLng(56.44275864933794, 24.919395446777344),
    new google.maps.LatLng(56.42947183587239, 24.91527557373047),
    new google.maps.LatLng(56.41238196547778, 24.909095764160156),
    new google.maps.LatLng(56.396424491325, 24.92351531982422),
    new google.maps.LatLng(56.369053253331074, 24.95990753173828),
    new google.maps.LatLng(56.34698989490647, 24.96814727783203),
    new google.maps.LatLng(56.316536722113014, 24.97089385986328),
    new google.maps.LatLng(56.305872370222815, 24.98394012451172),
    new google.maps.LatLng(56.29539555470087, 25.005826950073242),
    new google.maps.LatLng(56.292442478730884, 25.015954971313477),
    new google.maps.LatLng(56.283010159801506, 25.015268325805664),
    new google.maps.LatLng(56.27633943879794, 25.020933151245117),
    new google.maps.LatLng(56.27290832916116, 25.03363609313965),
    new google.maps.LatLng(56.26490120964812, 25.057153701782227),
    new google.maps.LatLng(56.18683945944164, 25.0927734375),
    new google.maps.LatLng(56.17613891766981, 25.17791748046875),
    new google.maps.LatLng(56.18683945944164, 25.23284912109375),
    new google.maps.LatLng(56.145549500679074, 25.30975341796875),
    new google.maps.LatLng(56.15931775281314, 25.38116455078125),
    new google.maps.LatLng(56.139428693863266, 25.4278564453125),
    new google.maps.LatLng(56.14860953861174, 25.50750732421875),
    new google.maps.LatLng(56.12412241244821, 25.63385009765625),
    new google.maps.LatLng(56.1026833818768, 25.69427490234375),
    new google.maps.LatLng(56.05976947910657, 25.78765869140625),
    new google.maps.LatLng(56.010666470406946, 25.87005615234375),
    new google.maps.LatLng(55.98609153380839, 25.91400146484375),
    new google.maps.LatLng(55.961500968488124, 26.015625),
    new google.maps.LatLng(55.92150795277898, 26.07879638671875),
    new google.maps.LatLng(55.88147363004733, 26.13372802734375),
    new google.maps.LatLng(55.8475661532989, 26.21063232421875),
    new google.maps.LatLng(55.807455510806804, 26.2408447265625),
    new google.maps.LatLng(55.770393581620034, 26.27655029296875),
    new google.maps.LatLng(55.7425739894847, 26.32049560546875),
    new google.maps.LatLng(55.71473455012689, 26.39190673828125),
    new google.maps.LatLng(55.699259616176356, 26.45233154296875),
    new google.maps.LatLng(55.688423515539995, 26.56219482421875),
    new google.maps.LatLng(55.677584411089526, 26.62811279296875),
    new google.maps.LatLng(55.621792980631156, 26.6363525390625),
    new google.maps.LatLng(55.57213384241379, 26.6363525390625),
    new google.maps.LatLng(55.541064956111036, 26.5814208984375),
    new google.maps.LatLng(55.51308195140151, 26.52099609375),
    new google.maps.LatLng(55.472626905474975, 26.56219482421875),
    new google.maps.LatLng(55.397831459360326, 26.54296875),
    new google.maps.LatLng(55.363502833950776, 26.4935302734375),
    new google.maps.LatLng(55.34788906283773, 26.455078125),
    new google.maps.LatLng(55.3322691334024, 26.5045166015625),
    new google.maps.LatLng(55.32914440840507, 26.57318115234375),
    new google.maps.LatLng(55.34164183013326, 26.65557861328125),
    new google.maps.LatLng(55.31820593049735, 26.75445556640625),
    new google.maps.LatLng(55.30257429675859, 26.82037353515625),
    new google.maps.LatLng(55.27129254203356, 26.795654296875),
    new google.maps.LatLng(55.24938064276788, 26.7352294921875),
    new google.maps.LatLng(55.21492323838662, 26.7132568359375),
    new google.maps.LatLng(55.16788774754464, 26.6748046875),
    new google.maps.LatLng(55.14434917097696, 26.5704345703125),
    new google.maps.LatLng(55.15062748298721, 26.488037109375),
    new google.maps.LatLng(55.13021935663459, 26.455078125),
    new google.maps.LatLng(55.14726606363729, 26.357876415110923),
    new google.maps.LatLng(55.12236729829848, 26.25732421875),
    new google.maps.LatLng(55.09880185799681, 26.2298583984375),
    new google.maps.LatLng(55.07679490514811, 26.26007080078125),
    new google.maps.LatLng(54.991797447795044, 26.1968994140625),
    new google.maps.LatLng(54.97761367069628, 26.09527587890625),
    new google.maps.LatLng(54.939765758658936, 26.03759765625),
    new google.maps.LatLng(54.93503226271366, 25.89202880859375),
    new google.maps.LatLng(54.88924640307588, 25.8453369140625),
    new google.maps.LatLng(54.835500081451656, 25.78216552734375),
    new google.maps.LatLng(54.79751835965902, 25.73822021484375),
    new google.maps.LatLng(54.74047879141591, 25.73822021484375),
    new google.maps.LatLng(54.689709430616546, 25.73272705078125),
    new google.maps.LatLng(54.60866430797486, 25.740966796875),
    new google.maps.LatLng(54.568877261771284, 25.7574462890625),
    new google.maps.LatLng(54.492377154813305, 25.63385009765625),
    new google.maps.LatLng(54.452476553950206, 25.61737060546875),
    new google.maps.LatLng(54.39974815563759, 25.59539794921875),
    new google.maps.LatLng(54.32773641556515, 25.55419921875),
    new google.maps.LatLng(54.31171665801094, 25.59814453125),
    new google.maps.LatLng(54.3197273165176, 25.653076171875),
    new google.maps.LatLng(54.30210180910987, 25.6915283203125),
    new google.maps.LatLng(54.27645123048291, 25.7135009765625),
    new google.maps.LatLng(54.26041150583603, 25.740966796875),
    new google.maps.LatLng(54.24115559647985, 25.7574462890625),
    new google.maps.LatLng(54.20261680346747, 25.78216552734375),
    new google.maps.LatLng(54.16725797022493, 25.78216552734375),
    new google.maps.LatLng(54.15921765416689, 25.75469970703125),
    new google.maps.LatLng(54.165650031996904, 25.71624755859375),
    new google.maps.LatLng(54.138305520106975, 25.65582275390625),
    new google.maps.LatLng(54.14313233476032, 25.61187744140625),
    new google.maps.LatLng(54.15921765416689, 25.55694580078125),
    new google.maps.LatLng(54.17529672404642, 25.51300048828125),
    new google.maps.LatLng(54.194583360162646, 25.5487060546875),
    new google.maps.LatLng(54.20623134347509, 25.563812255859375),
    new google.maps.LatLng(54.218679005433685, 25.553512573242188),
    new google.maps.LatLng(54.22791194357612, 25.545272827148438),
    new google.maps.LatLng(54.22710916135269, 25.581321716308594),
    new google.maps.LatLng(54.23152427039288, 25.590591430664062),
    new google.maps.LatLng(54.25078467487669, 25.567245483398438),
    new google.maps.LatLng(54.26642713402112, 25.553512573242188),
    new google.maps.LatLng(54.28446875235517, 25.524673461914062),
    new google.maps.LatLng(54.30931315634241, 25.513687133789062),
    new google.maps.LatLng(54.30110013318421, 25.497207641601562),
    new google.maps.LatLng(54.29348659965532, 25.465621948242188),
    new google.maps.LatLng(54.292083953083946, 25.423736572265625),
    new google.maps.LatLng(54.262817862443384, 25.344085693359375),
    new google.maps.LatLng(54.262817862443384, 25.294647216796875),
    new google.maps.LatLng(54.274847538882916, 25.269927978515625),
    new google.maps.LatLng(54.252389302768485, 25.245208740234375),
    new google.maps.LatLng(54.260703820636806, 25.226527450758567),
    new google.maps.LatLng(54.25399386823263, 25.206756591796875),
    new google.maps.LatLng(54.23955053156177, 25.209503173828125),
    new google.maps.LatLng(54.20904243375493, 25.182037353515625),
    new google.maps.LatLng(54.18815548107151, 25.146331787109375),
    new google.maps.LatLng(54.15760940347412, 25.099639892578125),
    new google.maps.LatLng(54.141523459050966, 25.080413818359375),
    new google.maps.LatLng(54.13669645687003, 25.030975341796875),
    new google.maps.LatLng(54.14876290750897, 24.98016357421875),
    new google.maps.LatLng(54.172885261926154, 24.95269775390625),
    new google.maps.LatLng(54.14313233476032, 24.819488525390625),
    new google.maps.LatLng(54.131064243254876, 24.82086181640625),
    new google.maps.LatLng(54.11416300731598, 24.778289794921875),
    new google.maps.LatLng(54.07550572224815, 24.80438232421875),
    new google.maps.LatLng(54.04003822492974, 24.841461181640625),
    new google.maps.LatLng(54.01261077755602, 24.838714599609375),
    new google.maps.LatLng(53.99485396562768, 24.797515869140625),
    new google.maps.LatLng(53.97062792135665, 24.731597900390625),
    new google.maps.LatLng(53.9657810216127, 24.695892333984375),
    new google.maps.LatLng(54.01018984017271, 24.70550537109375),
    new google.maps.LatLng(54.00938282974412, 24.665679931640625),
    new google.maps.LatLng(54.00131186464819, 24.621734619140625),
    new google.maps.LatLng(53.99485396562768, 24.597015380859375),
    new google.maps.LatLng(53.97224342934289, 24.536590576171875),
    new google.maps.LatLng(53.941538066746, 24.498138427734375),
    new google.maps.LatLng(53.90272001684047, 24.440460205078125),
    new google.maps.LatLng(53.89867439403615, 24.349822998046875),
    new google.maps.LatLng(53.922942255153494, 24.292144775390625),
    new google.maps.LatLng(53.9682045419455, 24.202880859375),
    new google.maps.LatLng(53.957701602686384, 24.152069091796875),
    new google.maps.LatLng(53.94638778530836, 24.108123779296875),
    new google.maps.LatLng(53.922942255153494, 23.979034423828125),
    new google.maps.LatLng(53.9682045419455, 23.913116455078125),
    new google.maps.LatLng(53.9496206177784, 23.87054443359375),
    new google.maps.LatLng(53.94396299650727, 23.818359375),
    new google.maps.LatLng(53.926176904600815, 23.79913330078125),
    new google.maps.LatLng(53.91323680284408, 23.82110595703125),
    new google.maps.LatLng(53.90029269016753, 23.7799072265625),
    new google.maps.LatLng(53.93183693802202, 23.74969482421875),
    new google.maps.LatLng(53.9334539494465, 23.69476318359375),
    new google.maps.LatLng(53.92536826573742, 23.59588623046875),
    new google.maps.LatLng(53.951236940045376, 23.53546142578125),
    new google.maps.LatLng(53.991624640444314, 23.477783203125),
    new google.maps.LatLng(54.013417725383405, 23.499755859375),
    new google.maps.LatLng(54.04407014753034, 23.525848388671875),
    new google.maps.LatLng(54.0892009640603, 23.521728515625),
    new google.maps.LatLng(54.124626489958175, 23.495635986328125),
    new google.maps.LatLng(54.16323800748458, 23.470916748046875),
    new google.maps.LatLng(54.178511788181325, 23.426971435546875),
    new google.maps.LatLng(54.218679005433685, 23.391265869140625),
    new google.maps.LatLng(54.24597041662376, 23.341827392578125),
    new google.maps.LatLng(54.26361995010229, 23.240203857421875),
    new google.maps.LatLng(54.29088164657006, 23.190765380859375),
    new google.maps.LatLng(54.30690951430536, 23.133087158203125),
    new google.maps.LatLng(54.302903132302816, 23.064422607421875),
    new google.maps.LatLng(54.321329261079136, 23.039703369140625),
    new google.maps.LatLng(54.342148864483406, 23.05755615234375),
    new google.maps.LatLng(54.36295792873051, 22.982025146484375),
    new google.maps.LatLng(54.377358031515016, 23.00811767578125),
    new google.maps.LatLng(54.41253702796797, 22.866668701171875),
    new google.maps.LatLng(54.368558568740376, 22.789764404296875),
    new google.maps.LatLng(54.44289461838544, 22.726593017578125),
    new google.maps.LatLng(54.45886326537356, 22.701873779296875),
    new google.maps.LatLng(54.535426104507124, 22.677154541015625),
    new google.maps.LatLng(54.56648880309967, 22.707366943359375),
    new google.maps.LatLng(54.591162795306, 22.685394287109375),
    new google.maps.LatLng(54.625363280671, 22.729339599609375),
    new google.maps.LatLng(54.64622736097367, 22.754058837890625),
    new google.maps.LatLng(54.65357691489307, 22.755775451660156),
    new google.maps.LatLng(54.65834348250389, 22.741355895996094),
    new google.maps.LatLng(54.669066215366634, 22.730369567871094),
    new google.maps.LatLng(54.67184572113447, 22.73895263671875),
    new google.maps.LatLng(54.67978611801621, 22.73723602294922),
    new google.maps.LatLng(54.67998460804333, 22.728309631347656),
    new google.maps.LatLng(54.690304752228016, 22.72418975830078),
    new google.maps.LatLng(54.6992335284814, 22.731399536132812),
    new google.maps.LatLng(54.70478821990351, 22.74444580078125),
    new google.maps.LatLng(54.71906821969817, 22.73998260498047),
    new google.maps.LatLng(54.72898192771607, 22.73998260498047),
    new google.maps.LatLng(54.7400824021475, 22.76641845703125),
    new google.maps.LatLng(54.7529630679501, 22.779808044433594),
    new google.maps.LatLng(54.75375559049865, 22.797317504882812),
    new google.maps.LatLng(54.74840576223716, 22.801437377929688),
    new google.maps.LatLng(54.75534058905648, 22.815170288085938),
    new google.maps.LatLng(54.75851040001975, 22.80658721923828),
    new google.maps.LatLng(54.76722610044151, 22.813796997070312),
    new google.maps.LatLng(54.76544349622541, 22.824783325195312),
    new google.maps.LatLng(54.770394980723005, 22.830963134765625),
    new google.maps.LatLng(54.768612516100426, 22.84332275390625),
    new google.maps.LatLng(54.773959674413014, 22.848129272460938),
    new google.maps.LatLng(54.777524054041095, 22.85980224609375),
    new google.maps.LatLng(54.785641746422336, 22.847442626953125),
    new google.maps.LatLng(54.791184600097054, 22.85602569580078),
    new google.maps.LatLng(54.789403051421026, 22.875938415527344),
    new google.maps.LatLng(54.79751835965902, 22.872161865234375),
    new google.maps.LatLng(54.8113699993228, 22.87799835205078),
    new google.maps.LatLng(54.811567845492355, 22.88349151611328),
    new google.maps.LatLng(54.81606858410694, 22.884950637817383),
    new google.maps.LatLng(54.816019128165706, 22.88100242614746),
    new google.maps.LatLng(54.81933254235152, 22.870445251464844),
    new google.maps.LatLng(54.82304126566012, 22.875165939331055),
    new google.maps.LatLng(54.82561244723026, 22.879886627197266),
    new google.maps.LatLng(54.83569780943616, 22.87302017211914),
    new google.maps.LatLng(54.838169327519054, 22.85954475402832),
    new google.maps.LatLng(54.84637368231633, 22.86357879638672),
    new google.maps.LatLng(54.850821129185796, 22.86907196044922),
    new google.maps.LatLng(54.8563550450787, 22.862977981567383),
    new google.maps.LatLng(54.86243159589309, 22.84109115600586),
    new google.maps.LatLng(54.87058162864485, 22.84255027770996),
    new google.maps.LatLng(54.87635974453388, 22.845125198364258),
    new google.maps.LatLng(54.881001391449985, 22.84830093383789),
    new google.maps.LatLng(54.88564250376914, 22.854223251342773),
    new google.maps.LatLng(54.890283081522526, 22.847957611083984),
    new google.maps.LatLng(54.89729230235531, 22.8460693359375),
    new google.maps.LatLng(54.89897038550892, 22.836885452270508),
    new google.maps.LatLng(54.9058300570164, 22.827186584472656),
    new google.maps.LatLng(54.91175113567017, 22.81757354736328),
    new google.maps.LatLng(54.90365877662311, 22.796287536621094),
    new google.maps.LatLng(54.91214584328125, 22.788047790527344),
    new google.maps.LatLng(54.92220957963004, 22.78461456298828),
    new google.maps.LatLng(54.91826331630886, 22.761268615722656),
    new google.maps.LatLng(54.92339338315794, 22.7471923828125),
    new google.maps.LatLng(54.93345430690936, 22.767105102539062),
    new google.maps.LatLng(54.93937132194496, 22.74272918701172),
    new google.maps.LatLng(54.954357197137696, 22.728309631347656),
    new google.maps.LatLng(54.96342488141676, 22.72624969482422),
    new google.maps.LatLng(54.97268757582564, 22.702560424804688),
    new google.maps.LatLng(54.97091403373604, 22.690200805664062),
    new google.maps.LatLng(54.986085140351626, 22.682647705078125),
    new google.maps.LatLng(54.98805499337746, 22.666168212890625),
    new google.maps.LatLng(54.984312189971114, 22.663421630859375),
    new google.maps.LatLng(54.975446263403335, 22.66307830810547),
    new google.maps.LatLng(54.96933748612686, 22.667198181152344),
    new google.maps.LatLng(54.96539584635321, 22.66204833984375),
    new google.maps.LatLng(54.966381292558566, 22.651748657226562),
    new google.maps.LatLng(54.9718993445662, 22.642135620117188),
    new google.maps.LatLng(54.98253916128194, 22.642135620117188),
    new google.maps.LatLng(54.98766103050618, 22.63561248779297),
    new google.maps.LatLng(54.99553955324048, 22.627716064453125),
    new google.maps.LatLng(55.00577932062484, 22.621536254882812),
    new google.maps.LatLng(55.01326057480774, 22.605743408203125),
    new google.maps.LatLng(55.02566063214697, 22.595443725585938),
    new google.maps.LatLng(55.035695964839874, 22.594757080078125),
    new google.maps.LatLng(55.04592548143563, 22.594757080078125),
    new google.maps.LatLng(55.05536579369322, 22.58960723876953),
    new google.maps.LatLng(55.06912892664404, 22.588577270507812),
    new google.maps.LatLng(55.070308403555956, 22.567977905273438),
    new google.maps.LatLng(55.06500048366455, 22.552871704101562),
    new google.maps.LatLng(55.05792216193925, 22.52471923828125),
    new google.maps.LatLng(55.05398922010195, 22.513046264648438),
    new google.maps.LatLng(55.04690895113791, 22.486953735351562),
    new google.maps.LatLng(55.042974927425185, 22.471160888671875),
    new google.maps.LatLng(55.042974927425185, 22.445068359375),
    new google.maps.LatLng(55.05241593518546, 22.408676147460938),
    new google.maps.LatLng(55.05339924550271, 22.37812042236328),
    new google.maps.LatLng(55.06008511526802, 22.312889099121094),
    new google.maps.LatLng(55.0630344087416, 22.29228973388672),
    new google.maps.LatLng(55.05831543487357, 22.24079132080078),
    new google.maps.LatLng(55.05831543487357, 22.219505310058594),
    new google.maps.LatLng(55.05261259918076, 22.16766357421875),
    new google.maps.LatLng(55.05123593092887, 22.153244018554688),
    new google.maps.LatLng(55.042974927425185, 22.135391235351562),
    new google.maps.LatLng(55.03274465727356, 22.128524780273438),
    new google.maps.LatLng(55.02644780788886, 22.112045288085938),
    new google.maps.LatLng(55.02585742753183, 22.07977294921875),
    new google.maps.LatLng(55.03018668153855, 22.053680419921875),
    new google.maps.LatLng(55.041597927834786, 22.031021118164062),
    new google.maps.LatLng(55.059298600306775, 22.027931213378906),
    new google.maps.LatLng(55.07306038115128, 22.038230895996094),
    new google.maps.LatLng(55.084066398864714, 22.033767700195312),
    new google.maps.LatLng(55.084262907376015, 21.980209350585938),
    new google.maps.LatLng(55.07384662569943, 21.9671630859375),
    new google.maps.LatLng(55.07718799265863, 21.943817138671875),
    new google.maps.LatLng(55.08583494070711, 21.89300537109375),
    new google.maps.LatLng(55.09408710192536, 21.87103271484375),
    new google.maps.LatLng(55.097623221109814, 21.8463134765625),
    new google.maps.LatLng(55.11726263235996, 21.81884765625),
    new google.maps.LatLng(55.118637029676826, 21.781768798828125),
    new google.maps.LatLng(55.12825648680247, 21.746063232421875),
    new google.maps.LatLng(55.134929850527655, 21.71722412109375),
    new google.maps.LatLng(55.14670365375207, 21.7144775390625),
    new google.maps.LatLng(55.16494618510639, 21.674652099609375),
    new google.maps.LatLng(55.17867161987947, 21.649246215820312),
    new google.maps.LatLng(55.18337639538042, 21.61285400390625),
    new google.maps.LatLng(55.189648565366255, 21.588821411132812),
    new google.maps.LatLng(55.198271186918696, 21.562042236328125),
    new google.maps.LatLng(55.1961157065271, 21.542129516601562),
    new google.maps.LatLng(55.18592458352485, 21.520843505859375),
    new google.maps.LatLng(55.18612059124748, 21.500930786132812),
    new google.maps.LatLng(55.19591974797939, 21.487884521484375),
    new google.maps.LatLng(55.20650012991828, 21.473464965820312),
    new google.maps.LatLng(55.21472737238615, 21.454925537109375),
    new google.maps.LatLng(55.2276524609334, 21.441192626953125),
    new google.maps.LatLng(55.247619340578275, 21.429519653320312),
    new google.maps.LatLng(55.26796740662684, 21.41132354736328),
    new google.maps.LatLng(55.28830505418246, 21.390380859375),
    new google.maps.LatLng(55.29495164118482, 21.381454467773438),
    new google.maps.LatLng(55.28850055792437, 21.375274658203125),
    new google.maps.LatLng(55.28204842596846, 21.35845184326172),
    new google.maps.LatLng(55.27755086530207, 21.3409423828125),
    new google.maps.LatLng(55.27207488638001, 21.33270263671875),
    new google.maps.LatLng(55.2646419928414, 21.318283081054688),
    new google.maps.LatLng(55.25877293644583, 21.312103271484375),
    new google.maps.LatLng(55.24977203265609, 21.289443969726562),
    new google.maps.LatLng(55.24546653191648, 21.274337768554688),
    new google.maps.LatLng(55.28185289044653, 20.95367431640625)];
    let polyline = new google.maps.Polygon(
        {
            path:path, 
            strokeColor: "#c0392b",             
            strokeOpacity: .7, 
            strokeWeight: 2,
            fillColor: "SandyBrown",
            fillOpacity: .07
        });
    polyline.setMap(map);

    let marker = new google.maps.Marker({        
        map: map,
        icon: defaultMarker
    });
    polyline.addListener('click', function(e) {
        data.lat = e.latLng.lat();
        data.lng = e.latLng.lng();
        marker.setPosition(
        {
            lat: data.lat, 
            lng: data.lng
        } 
        )       
    });
}

<template>
    <section class="section">
			<div class="container content is-widescreen">
				<div class="columns">
					<div class="column is-half">
						<div class="notification">
                            <form>
                                <h1>Adásvételi szerződés</h1>
                                <br>
                                <div class="field">
                                    <p>amely létrejött egyrészről</p>
                                </div>
                                <div class="field">
                                    <label class="label">Név</label>
                                    <div class="control">
                                        <input v-model="name1" class="input" type="text" placeholder="Varga János">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Születési hely és idő</label>
                                    <div class="control">
                                        <input v-model="birthdata1" class="input" type="text" placeholder="Segesvár, 1996">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Anyja neve</label>
                                    <div class="control">
                                        <input v-model="mother1" class="input" type="text" placeholder="Dósa Enikő">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Lakcím</label>
                                    <div class="control">
                                        <input v-model="location1" class="input" type="text" placeholder="Text input">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Személyi igazolvány száma</label>
                                    <div class="control">
                                        <input v-model="id1" class="input" type="text" placeholder="Text input">
                                    </div>
                                </div>
                                <div class="field">
                                    <p>
                                        mint eladó (a továbbiakban: Eladó),
                                    </p>
                                    <br>
                                    <p> másrészről </p>
                                </div>
                                <div class="field">
                                    <label class="label">Név</label>
                                    <div class="control">
                                        <input v-model="name2" class="input" type="text" placeholder="Text input">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Születési hely és idő</label>
                                    <div class="control">
                                        <input v-model="birthdata2" class="input" type="text" placeholder="Text input">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Anyja neve</label>
                                    <div class="control">
                                        <input v-model="mother2" class="input" type="text" placeholder="Text input">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Lakcím</label>
                                    <div class="control">
                                        <input v-model="location2" class="input" type="text" placeholder="Text input">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Személyi igazolvány száma</label>
                                    <div class="control">
                                        <input v-model="id2" class="input" type="text" placeholder="Text input">
                                    </div>
                                </div>
                                <div class="field">
                                    <p>
                                        mint vevő (a továbbiakban: Vevő) között az alulírott helyen és napon az alábbi feltételekkel:
                                    </p>
                                    <ol>
                                        <li>
                                            <p>Az Eladó eladja a kizárólagos tulajdonában álló</p>
                                            <label class="label"></label>
                                            <div class="control">
                                                <input v-model="type" class="input" type="text" placeholder="Text input">
                                            </div>
                                            <p>típusú, </p>
                                            <div class="control">
                                                <input v-model="serialNumber" class="input" type="text" placeholder="Text input">
                                            </div>
                                            <p>gyári számú</p>
                                            <div class="control">
                                                <input v-model="deviceName" class="input" type="text" placeholder="Text input">
                                            </div>
                                            <p>készüléket.</p>
                                        </li>
                                        <li>A Vevő megveszi az első pontban megjelölt ingóságot.</li>
                                        <li>Az Eladó az ingóság per-, igény- és tehermentességéért szavatosságot vállal.</li>
                                        <li>
                                            <p>A Szerződő Felek megállapodnak abban, hogy az Eladó a tulajdonát képező ingóságot</p>
                                            <div class="control">
                                                <input v-model="price1" class="input" type="number" placeholder="Text input">
                                            </div>
                                            <p>Ft, azaz </p>
                                            <div class="control">
                                                <input v-model="price2" class="input" type="number" placeholder="Text input">
                                            </div>
                                            <p>forint vételár megfizetése ellenében adja el a Vevőnek, aki azt megtekintett és megvizsgált állapotban a fenti vételárért megvásárolja. A Szerződő Felek megállapodása szerint a Vevő 2 egyenlő részletben teljesít. A vételár első részletét,</p>
                                            <div class="control">
                                                <input v-model="firstPrice" class="input" type="number" placeholder="Text input">
                                            </div>
                                            <p> Ft-ot a szerződés aláírásával egyidejüleg adja át az Eladónak, aki az összeg átvételét a szerződés aláírásával elismeri. A fennmaradó részletet a Vevő a szerződés aláírásától számított 10 napon belül köteles az Eladónak megfizetni.</p>
                                        </li>
                                        <li>A Vevő az ingóságot a teljes vételár kifizetésekor veheti birtokába. Ettől az időponttól kezdődően viseli annak terheit, szedi hasznait és ebben az időpontban száll át a kárveszély viselése is.</li>
                                        <li>A jelen szerződésben nem szabályozott kérdésekben. a Polgári Törvénykönyv Negyedik részének I. címében található általános szerződési szabályokat (Ptk. 198–338. §), a Ptk. részletvételre vonatkozó 376. §-át, valamint az adásvételre vonatkozó rendelkezéseit (Ptk. 365–369. §) kell alkalmazni.</li>
                                        <li>E szerződés kettő példányban készült, melyet a Szerződő Felek mint akaratukkal mindenben megegyezőt aláírásukkal megerősítenek.</li>
                                    </ol>
                                    <div class="field">
                                        <label class="label">Kelt. :</label>
                                        <div class="control">
                                            <input v-model="location" class="input" type="text" placeholder="város/község neve">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label"></label>
                                        <div class="control">
                                            <input v-model="date" class="input" type="date" placeholder="">
                                        </div>
                                    </div>
                                    <p>napján. </p>
                                </div>
                                <div class="field is-grouped">
                                    <div class="control">
                                        <button @click="submitHandle" class="button is-link">Előnézet Generálása</button>
                                    </div>
                                    <div class="control">
                                        <button class="button is-link is-light">Mégse</button>
                                    </div>
                                </div>
                            </form>
						</div>
					</div>
					<div class="column is-half">
						<div class="notification">
							<pre>
				Adásvételi szerződés


amely létrejött egyrészről
név: {{name1}}
születési hely és idő: {{birthdata1}}
anyja neve: {{mother1}}.
lakcím: {{location1}}.
sz. ig. sz.: {{id1}}.
mint eladó (a továbbiakban: Eladó)

másrészről 
név: {{name2}}
születési hely és idő: {{birthdata2}}
anyja neve: {{mother2}}.
lakcím: {{location2}}.
sz. ig. sz.: {{id2}}.
mint vevő (a továbbiakban: Vevő)
között az alulírott helyen és napon az alábbi feltételekkel:

1./	Az Eladó eladja a kizárólagos tulajdonában álló {{type}} 
típusú, {{serialNumber}} gyári számú {{deviceName}} készüléket.

2./	A Vevő megveszi az első pontban megjelölt ingóságot.

3./	Az Eladó az ingóság per-, igény- és tehermentességéért szavatosságot 
vállal.

4./	A Szerződő Felek megállapodnak abban, hogy az Eladó a tulajdonát képező 
ingóságot {{price1}} Ft, azaz {{price2}} forint vételár megfizetése ellenében adja 
el a Vevőnek, aki azt megtekintett és megvizsgált állapotban a fenti vételárért 
megvásárolja. A Szerződő Felek megállapodása szerint a Vevő 2 egyenlő részletben 
teljesít. A vételár első részletét, {{firstPrice}} Ft-ot a szerződés aláírásával egyidejüleg 
adja át az Eladónak, aki az összeg átvételét a szerződés aláírásával elismeri. A 
fennmaradó részletet a Vevő a szerződés aláírásától számított 10 napon belül 
köteles az Eladónak megfizetni.

5./	 A Vevő az ingóságot a teljes vételár kifizetésekor veheti birtokába. Ettől 
az időponttól kezdődően viseli annak terheit, szedi hasznait és ebben az időpontban 
száll át a kárveszély viselése is.

6./	A jelen szerződésben nem szabályozott kérdésekben. a Polgári Törvénykönyv Negyedik 
részének I. címében található általános szerződési szabályokat (Ptk. 198–338. §), 
a Ptk. részletvételre vonatkozó 376. §-át, valamint az adásvételre vonatkozó 
rendelkezéseit (Ptk. 365–369. §) kell alkalmazni.

7./	E szerződés kettő példányban készült, melyet a Szerződő Felek mint akaratukkal 
mindenben megegyezőt aláírásukkal megerősítenek.


Kelt: {{location}}(város/község neve), {{date}} napján.


                            </pre>
						</div>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
export default {
    methods: {
        submitHandle(e){
            e.preventDefault()
            console.log(this.$data)
        }
    },
    data(){
        return{
            name1: '',
            birthdata1: '',
            mother1: '',
            location1: '',
            id1: '',
            name2: '',
            birthdata2: '',
            mother2: '',
            location2: '',
            id2: '',
            type: '',
            serialNumber: '',
            deviceName: '',
            price1: null,
            price2: null,
            firstPrice: null,
            location: '',
            date: null
        }
    }
}
</script>

<style>

</style>
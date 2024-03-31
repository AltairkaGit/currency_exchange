import { motion } from "framer-motion";
import { Convertion } from "./Convertion";
import { CurrencySvg } from "./assets/CurrencySvg";
import { CurrencyBlock } from "./Currency";
import { ArrowsSvg } from "./assets/ArrowsSvg";
import { ExchangeSvg } from "./assets/ExchangeSvg";

const Album = () => <motion.div className="hidden xl:flex pt-32 justify-center gap-4">
    <Convertion>
        <CurrencySvg />
        <CurrencyBlock value={100} currency='Доллар США' />
    </Convertion>
    <motion.div className='mt-72'>
    <ArrowsSvg/>
    </motion.div>
    
    <Convertion>
        <ExchangeSvg />
        <CurrencyBlock value={367} currency='Дирхам ОАЭ' />
    </Convertion>
</motion.div>

const Portrait = () => <motion.div className="flex flex-col items-center pt-6 xl:hidden gap-5">
    <CurrencySvg />
    <ExchangeSvg />
    <CurrencyBlock value={100} currency='Доллар США' />
    <ArrowsSvg/>
    <CurrencyBlock value={367} currency='Дирхам ОАЭ' />
    <motion.div className="h-12" />
</motion.div>

export const PageIndex = () => (
    <motion.main className='h-dvh overflow-x-hidden bg-purple' initial="out" animate="in" exit="out">
        <Album />
        <Portrait />
    </motion.main>
);

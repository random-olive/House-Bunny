import { Vertical } from 'components/atoms/Bindings'
import { HotSection, AdvSection, MoreSection } from 'components/molecules/Section'


export const LandingBody = () =>{
    return (
        <Vertical>
            <HotSection></HotSection>
            <AdvSection></AdvSection>
            <MoreSection></MoreSection>
        </Vertical>
    )
}
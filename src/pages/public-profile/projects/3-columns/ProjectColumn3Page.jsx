import { Fragment } from 'react';
import { Container } from '@/components/container';
import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';
import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { PageMenu } from '@/pages/public-profile';
import { Projects2 } from './blocks';
const ProjectColumn3Page = () => {
  const image = <img src={toAbsoluteUrl('/media/avatars/300-1.png')} className="rounded-full border-3 border-success h-[100px] shrink-0" />;
  return <Fragment>
      <UserProfileHero name="Jenny Klabber" image={image} info={[{
      label: 'KeenThemes',
      icon: 'abstract'
    }, {
      label: 'SF, Bay Area',
      icon: 'geolocation'
    }, {
      email: 'jenny@kteam.com',
      icon: 'sms'
    }]} />

      <Container>
        <Navbar>
          <PageMenu />

          <NavbarActions>
            <button type="button" className="btn btn-sm btn-primary">
              <KeenIcon icon="users" /> Connect
            </button>
            <button className="btn btn-sm btn-icon btn-light">
              <KeenIcon icon="messages" />
            </button>
            <NavbarDropdown />
          </NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <Projects2 />
      </Container>
    </Fragment>;
};
export { ProjectColumn3Page };
import PageBanner from '@/components/PageBanner/PageBanner';
import Image from 'next/image';
import { API_BASE_URL } from '../lib/config';
import './Team.css';

export const metadata = {
  title: ' Our Team - PeopleNTech',
  description:
    'We PeopleNTech is offering professional IT training course &amp; job placement facility for students. We are affiliating with top notch IT company in Bangladesh..',
};

// Team Skeleton Component
function TeamSkeleton() {
  return (
    <div className='relative text-center mb-[30px] block team-two__single'>
      <div className='relative block max-w-[300px] w-full mx-auto z-20'>
        <div className='relative block rounded-full overflow-hidden team-two__img z-10'>
          <div className='skeleton w-full aspect-square rounded-full'></div>
        </div>
      </div>
      <div className='team-two__content mt-4'>
        <div className='skeleton h-5 w-3/4 mx-auto mb-2'></div>
        <div className='skeleton h-4 w-1/2 mx-auto'></div>
      </div>
    </div>
  );
}

async function getTeamMembers() {
  const res = await fetch(`${API_BASE_URL}/our-team`, {
    // Static Generation
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error('Failed to fetch team data');
  return res.json();
}

const Team = async () => {
  let teamData;
  try {
    teamData = await getTeamMembers();
  } catch (error) {
    console.error(error);
    teamData = null;
  }

  const isLoading = !teamData;

  return (
    <div>
      <PageBanner
        title='Get to Know the Faces Behind Our Work'
        subtitle='Team'
      />
      <div className='pt-[80px] pb-[60px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            {isLoading ? (
              Array.from({ length: 8 }).map((_, i) => <TeamSkeleton key={i} />)
            ) : teamData?.data?.length > 0 ? (
              teamData.data.map((member) => (
                <div
                  key={member.id}
                  className='relative text-center mb-[30px] block team-two__single'
                >
                  <div className='relative block max-w-[250px] w-full mx-auto z-20'>
                    <div className='relative block rounded-full overflow-hidden team-two__img z-10'>
                      <Image
                        width={250}
                        height={250}
                        className='size-[250px] rounded-full object-cover object-center'
                        src={
                          member.image
                            ? `${member.image}`
                            : '/images/Teachers/default.jpg'
                        }
                        alt={member.name}
                      />
                    </div>
                  </div>
                  <div className='team-two__content'>
                    <h4 className='text-[20px] capitalize leading-7 font-semibold mb-[2px]  transition-all duration-300 ease-in-out'>
                      {member.name || 'Unknown'}
                    </h4>
                    <p className='text-[15px] leading-6 text-[#162726] font-medium'>
                      {member.designation || 'Team Member'}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-center text-gray-500 col-span-full'>
                No team members found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

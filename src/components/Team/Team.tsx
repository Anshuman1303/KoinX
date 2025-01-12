import Image from "next/image";

const teamData = [
  { name: "John Smith", imageSrc: "/images/person1.png" },
  { name: "Elina Williams", imageSrc: "/images/person2.png" },
  { name: "John Smith", imageSrc: "/images/person3.png" },
];

export default function Team() {
  return (
    <div className="box flex flex-col gap-4">
      <h1>Team</h1>
      <p className="text-[16px] text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id
        pretium quam. Facilisis purus convallis quam augue.
      </p>
      {teamData.map((member, index) => (
        <div key={index} className="p-3 bg-[#E8F4FD] flex flex-row items-center gap-4 rounded-lg">
          <div className="flex flex-col items-center h-full w-full gap-1">
            <Image src={member.imageSrc} alt={`${member.name}'s image`} width={97} height={105} className="h-full rounded-md" />
            <h1 className="text-[15px]">{member.name}</h1>
            <h2 className="text-xs">Designation Here</h2>
          </div>
          <p className="text-[14px] text-[#3E424A]">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus
            sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin
            amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi
            gravida praesent interdu
          </p>
        </div>
      ))}
    </div>
  );
}

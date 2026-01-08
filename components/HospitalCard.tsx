import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";

interface HospitalCardProps {
  name: string;
  imageUrl: string;
  schedule: string;
  location: string;
  phone: string;
  phone2: string;
  // isOpen?: boolean;
}

const HospitalCard = ({
  name,
  imageUrl,
  schedule,
  location,
  phone,
  phone2,
}: // isOpen = true,
HospitalCardProps) => {
  return (
    <div className="w-full max-w-md p-6 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-md hover:shadow-lg">
      <div className="flex gap-4 items-start">
        {/* Hospital Image */}
        <div className="flex-shrink-0">
          <Image
            src={imageUrl}
            alt={name}
            width={80}
            height={80}
            className="rounded-xl object-cover border-2 border-gray-300"
          />
        </div>

        {/* Hospital Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-black dark:text-white">
              {name}
            </h3>
            {/* <Badge 
              variant={isOpen ? "default" : "secondary"} 
              className="bg-gray-200 text-gray-800"
            >
              {isOpen ? "Open" : "Closed"}
            </Badge> */}
          </div>

          {/* Schedule */}
          <div className="mt-2 flex items-center text-sm text-black dark:text-white font-bold">
            <Clock className="w-4 h-4 mr-2 text-gray-600" />
            <span>{schedule}</span>
          </div>

          {/* Location */}
          <div className="mt-1 flex items-center text-sm ttext-black dark:text-white font-bold">
            <MapPin className="w-4 h-4 mr-2 text-gray-600" />
            <span>{location}</span>
          </div>

          {/* Contact */}
          <div className="mt-2">
            <Button
              variant="outline"
              className="text-sm flex items-center gap-2 text-gray-900 border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-zinc-900 dark:bg-zinc-950 dark:text-white"
              onClick={() => (window.location.href = `tel:${phone}`)}
            >
              <Phone className="w-4 h-4" />
              {phone}
            </Button>
          </div>
          <div className="mt-2">
            <Button
              variant="outline"
              className="text-sm flex items-center gap-2 text-gray-900 border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-zinc-900 dark:bg-zinc-950 dark:text-white"
              onClick={() => (window.location.href = `tel:${phone2}`)}
            >
              <Phone className="w-4 h-4" />
              {phone2}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;

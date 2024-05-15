import * as React from "react";
import SingleProduct from "./SingleProduct"; 
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AcademyImages = require.context('../images/', true);

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        <div className="row mb-4">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <SingleProduct title="Java" imgSrc={AcademyImages('./courses/java.png')} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <SingleProduct title="Python basic" imgSrc={AcademyImages('./courses/python.png')} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <SingleProduct title="Django" imgSrc={AcademyImages('./courses/django.png')} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <SingleProduct title="JavaScript" imgSrc={AcademyImages('./courses/javascript.png')} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </div>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateRestaurantDto,
  CreateRestaurantInput,
} from './dtos/create-restaurant.dto';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsService } from './restaurants.service';
import { CreateAccountOutput } from 'src/users/dtos/create-account.dto';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { User } from 'src/users/entities/user.entity';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Mutation((returns) => CreateAccountOutput)
  async createRestaurant(
    @AuthUser() authUser: User,
    @Args('input') createRestaurantInput: CreateRestaurantInput,
  ): Promise<CreateAccountOutput> {
    return this.restaurantsService.createRestaurant(
      authUser,
      createRestaurantInput,
    );
  }
}
